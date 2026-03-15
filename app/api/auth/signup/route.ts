import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/hash";
import { createUser, findUserByEmail } from "@/lib/db";

export async function POST(req: Request) {
  const { email, password, firstName, country, interests } = await req.json();

  if (!email || !password || !firstName || !country) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const normalizedEmail = String(email).toLowerCase();
  if (findUserByEmail(normalizedEmail)) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const passwordHash = hashPassword(password);
  const user = createUser({
    email: normalizedEmail,
    passwordHash,
    firstName: String(firstName),
    country: String(country),
    interests: interests ? String(interests) : null,
  });

  return NextResponse.json(
    { success: true, user: { id: user.id, email: user.email, firstName: user.firstName } },
    { status: 201 }
  );
}
