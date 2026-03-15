import { NextResponse } from "next/server";
import { findUserByEmail, findUserById, updateUserProfile } from "@/lib/db";

export async function POST(req: Request) {
  const { id, email, firstName, country, interests, profileImage } = await req.json();

  if (!id || !email || !firstName || !country) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const existing = findUserById(Number(id));
  if (!existing) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const normalizedEmail = String(email).toLowerCase();
  const emailOwner = findUserByEmail(normalizedEmail);
  if (emailOwner && emailOwner.id !== Number(id)) {
    return NextResponse.json({ error: "Email already in use" }, { status: 409 });
  }

  const updated = updateUserProfile({
    id: Number(id),
    email: normalizedEmail,
    firstName: String(firstName),
    country: String(country),
    interests: interests ? String(interests) : null,
    profileImage: profileImage ?? null,
  });

  if (!updated) {
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }

  return NextResponse.json({ success: true, user: updated }, { status: 200 });
}
