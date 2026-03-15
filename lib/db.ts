import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { capitalizeFirstLetter } from "@/lib/text";

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
    interests TEXT,
    profileImage TEXT
  );
`);

const columns = (db.prepare("PRAGMA table_info(users)") as any).all();
if (!columns.some((col: any) => col.name === "profileImage")) {
  db.exec("ALTER TABLE users ADD COLUMN profileImage TEXT;");
}

db.exec(`
  CREATE TABLE IF NOT EXISTS suggestions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  email TEXT NOT NULL,
  where_found TEXT,
  source_link TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

type UserRow = {
  id: number;
  email: string;
  passwordHash: string;
  firstName: string;
  country: string;
  interests: string | null;
  profileImage: string | null;
};

const insertUser = db.prepare(
  "INSERT INTO users (email, passwordHash, firstName, country, interests) VALUES (?, ?, ?, ?, ?)"
);

const findUserByEmailStmt = db.prepare<UserRow>(
  "SELECT id, email, passwordHash, firstName, country, interests FROM users WHERE email = ?"
);

export type StoredUser = UserRow;

export function getDb() {
  return db;
}

export function createUser(input: {
  email: string;
  passwordHash: string;
  firstName: string;
  country: string;
  interests?: string | null;
  profileImage?: string | null;
}): StoredUser {
  const normalizedFirstName = capitalizeFirstLetter(input.firstName);
  const result = insertUser.run(
    input.email,
    input.passwordHash,
    normalizedFirstName,
    input.country,
    input.interests ?? null
  ) as { lastInsertRowid: number };

  return {
    id: Number(result.lastInsertRowid),
    email: input.email,
    passwordHash: input.passwordHash,
    firstName: normalizedFirstName,
    country: input.country,
    interests: input.interests ?? null,
    profileImage: input.profileImage ?? null,
  };
}

export function findUserByEmail(email: string): StoredUser | undefined {
  return findUserByEmailStmt.get(email);
}

export function findUserById(id: number): StoredUser | undefined {
  const stmt = db.prepare<UserRow>(
    "SELECT id, email, passwordHash, firstName, country, interests, profileImage FROM users WHERE id = ?"
  );
  return stmt.get(id);
}

const updateProfileStmt = db.prepare(
  "UPDATE users SET email = ?, firstName = ?, country = ?, interests = ?, profileImage = ? WHERE id = ?"
);

export function updateUserProfile(input: {
  id: number;
  email: string;
  firstName: string;
  country: string;
  interests?: string | null;
  profileImage?: string | null;
}): StoredUser | undefined {
  const normalizedEmail = String(input.email).toLowerCase();
  const normalizedFirstName = capitalizeFirstLetter(input.firstName);
  updateProfileStmt.run(
    normalizedEmail,
    normalizedFirstName,
    input.country,
    input.interests ?? null,
    input.profileImage ?? null,
    input.id
  );

  return findUserById(input.id);
}
