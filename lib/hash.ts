import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const SALT_SIZE = 16;
const KEY_LENGTH = 64;

export function hashPassword(password: string): string {
  const salt = randomBytes(SALT_SIZE).toString("hex");
  const derivedKey = scryptSync(password, salt, KEY_LENGTH);
  return `${salt}:${derivedKey.toString("hex")}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, key] = stored.split(":");
  if (!salt || !key) {
    return false;
  }
  const derivedKey = scryptSync(password, salt, KEY_LENGTH);
  const keyBuffer = Buffer.from(key, "hex");
  return timingSafeEqual(keyBuffer, derivedKey);
}
