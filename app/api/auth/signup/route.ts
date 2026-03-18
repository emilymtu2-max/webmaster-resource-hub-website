import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/hash";
import { createUser, findUserByEmail } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { email, password, firstName, country, interests, profileImage } = await req.json();

  if (!email || !password || !firstName || !country) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const normalizedEmail = String(email).toLowerCase();
  if (await findUserByEmail(normalizedEmail)) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const passwordHash = hashPassword(password);

  try {
    const user = await createUser({
      email: normalizedEmail,
      passwordHash,
      firstName: String(firstName),
      country: String(country),
      interests: interests ? String(interests) : null,
      profileImage: profileImage ?? null,
    });

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
      { status: 201 }
    );
  } catch (error: any) {
    const message =
      error?.message?.includes("duplicate") || error?.message?.includes("Unique")
        ? "Email already registered"
        : error?.message ?? "Signup failed";
    const status = error?.code === "23505" ? 409 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
