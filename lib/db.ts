import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";

const DATA_DIR = path.resolve(process.cwd(), "data");
mkdirSync(DATA_DIR, { recursive: true });

const DB_PATH = path.join(DATA_DIR, "users.db");
const db = new Database(DB_PATH);

db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    passwordHash TEXT NOT NULL,
    firstName TEXT NOT NULL,
    country TEXT NOT NULL,
    interests TEXT
  );
`);

type UserRow = {
  id: number;
  email: string;
  passwordHash: string;
  firstName: string;
  country: string;
  interests: string | null;
};

const insertUser = db.prepare(
  "INSERT INTO users (email, passwordHash, firstName, country, interests) VALUES (?, ?, ?, ?, ?)"
);

const findUserByEmailStmt = db.prepare<UserRow>(
  "SELECT id, email, passwordHash, firstName, country, interests FROM users WHERE email = ?"
);

export type StoredUser = UserRow;

export function createUser(input: {
  email: string;
  passwordHash: string;
  firstName: string;
  country: string;
  interests?: string | null;
}): StoredUser {
  const result = insertUser.run(
    input.email,
    input.passwordHash,
    input.firstName,
    input.country,
    input.interests ?? null
  ) as { lastInsertRowid: number };

  return {
    id: Number(result.lastInsertRowid),
    email: input.email,
    passwordHash: input.passwordHash,
    firstName: input.firstName,
    country: input.country,
    interests: input.interests ?? null,
  };
}

export function findUserByEmail(email: string): StoredUser | undefined {
  return findUserByEmailStmt.get(email);
}
