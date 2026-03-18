import { NextResponse } from "next/server";
import { verifyPassword } from "@/lib/hash";
import { findUserByEmail } from "@/lib/db";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
  }

  const normalizedEmail = String(email).toLowerCase();
  const user = await findUserByEmail(normalizedEmail);
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const validPassword = verifyPassword(password, user.passwordHash);
  if (!validPassword) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json(
    {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        country: user.country,
        interests: user.interests,
        profileImage: user.profileImage,
      },
    },
    { status: 200 }
  );
}
