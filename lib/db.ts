import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { capitalizeFirstLetter } from "@/lib/text";

export const runtime = "nodejs";

type SupabaseUserRow = {
  id: string;
  email: string;
  password_hash: string;
  first_name: string;
  country: string;
  interests: string | null;
  profile_image: string | null;
};

type SupabaseUserInsert = {
  email: string;
  password_hash: string;
  first_name: string;
  country: string;
  interests?: string | null;
  profile_image?: string | null;
};

type SupabaseUserUpdate = {
  email?: string;
  first_name?: string;
  country?: string;
  interests?: string | null;
  profile_image?: string | null;
};

type Database = {
  public: {
    Tables: {
      users: {
        Row: SupabaseUserRow;
        Insert: SupabaseUserInsert;
        Update: SupabaseUserUpdate;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

function hasEnv(key: string): boolean {
  const value = process.env[key];
  return typeof value === "string" && value.trim().length > 0;
}

function readFirstEnv(keys: string[]): string | undefined {
  for (const key of keys) {
    const value = process.env[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value.trim();
    }
  }
  return undefined;
}

function getSupabase(): SupabaseClient<Database> {
  console.log("[db] Supabase env presence", {
    nodeEnv: process.env.NODE_ENV ?? null,
    vercelEnv: process.env.VERCEL_ENV ?? null,
    vercelRegion: process.env.VERCEL_REGION ?? null,
    SUPABASE_URL: hasEnv("SUPABASE_URL"),
    NEXT_PUBLIC_SUPABASE_URL: hasEnv("NEXT_PUBLIC_SUPABASE_URL"),
    next_public_supabase_url: hasEnv("next_public_supabase_url"),
    SUPABASE_SERVICE_ROLE_KEY: hasEnv("SUPABASE_SERVICE_ROLE_KEY"),
    SUPABASE_SERVICE_ROLE: hasEnv("SUPABASE_SERVICE_ROLE"),
    SUPABASE_SERVICE_KEY: hasEnv("SUPABASE_SERVICE_KEY"),
    SUPABASE_SECRET_KEY: hasEnv("SUPABASE_SECRET_KEY"),
    SUPABASE_KEY: hasEnv("SUPABASE_KEY"),
    SUPABASE_ANON_KEY: hasEnv("SUPABASE_ANON_KEY"),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: hasEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    next_public_supabase_anon_key: hasEnv("next_public_supabase_anon_key"),
  });

  const supabaseUrl = readFirstEnv([
    "SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_URL",
    "next_public_supabase_url",
  ]);
  const supabaseServiceRoleKey = readFirstEnv([
    "SUPABASE_SERVICE_ROLE_KEY",
    "SUPABASE_SERVICE_ROLE",
    "SUPABASE_SERVICE_KEY",
    "SUPABASE_SECRET_KEY",
    "SUPABASE_KEY",
    "SUPABASE_ANON_KEY",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "next_public_supabase_anon_key",
  ]);

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Missing Supabase credentials in environment. Expected SUPABASE_URL/NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or configured alias)."
    );
  }

  return createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, detectSessionInUrl: false },
  });
}

const USER_SELECT =
  "id, email, password_hash, first_name, country, interests, profile_image";

export type StoredUser = {
  id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  country: string;
  interests: string | null;
  profileImage: string | null;
};

function mapRow(row: SupabaseUserRow): StoredUser {
  return {
    id: row.id,
    email: row.email,
    passwordHash: row.password_hash,
    firstName: row.first_name,
    country: row.country,
    interests: row.interests ?? null,
    profileImage: row.profile_image ?? null,
  };
}

export async function createUser(input: {
  email: string;
  passwordHash: string;
  firstName: string;
  country: string;
  interests?: string | null;
  profileImage?: string | null;
}): Promise<StoredUser> {
  const supabase = getSupabase();
  const normalizedFirstName = capitalizeFirstLetter(input.firstName);

  const { data, error } = await supabase
    .from("users")
    .insert({
      email: input.email,
      password_hash: input.passwordHash,
      first_name: normalizedFirstName,
      country: input.country,
      interests: input.interests ?? null,
      profile_image: input.profileImage ?? null,
    })
    .select(USER_SELECT)
    .single();

  if (error || !data) {
    throw error ?? new Error("Failed to create user");
  }

  return mapRow(data);
}

export async function findUserByEmail(email: string): Promise<StoredUser | undefined> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("users")
    .select(USER_SELECT)
    .eq("email", email)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ? mapRow(data) : undefined;
}

export async function findUserById(id: string): Promise<StoredUser | undefined> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("users")
    .select(USER_SELECT)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ? mapRow(data) : undefined;
}

export async function updateUserProfile(input: {
  id: string;
  email: string;
  firstName: string;
  country: string;
  interests?: string | null;
  profileImage?: string | null;
}): Promise<StoredUser | undefined> {
  const supabase = getSupabase();
  const normalizedEmail = String(input.email).toLowerCase();
  const normalizedFirstName = capitalizeFirstLetter(input.firstName);

  const { data, error } = await supabase
    .from("users")
    .update({
      email: normalizedEmail,
      first_name: normalizedFirstName,
      country: input.country,
      interests: input.interests ?? null,
      profile_image: input.profileImage ?? null,
    })
    .eq("id", input.id)
    .select(USER_SELECT)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data ? mapRow(data) : undefined;
}
