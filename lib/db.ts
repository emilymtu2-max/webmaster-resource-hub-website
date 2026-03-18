import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { capitalizeFirstLetter } from "@/lib/text";

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

let supabaseClient: SupabaseClient<Database> | null = null;

function getSupabase(): SupabaseClient<Database> {
  if (supabaseClient) {
    return supabaseClient;
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error("Missing Supabase URL/Service Role key in environment");
  }

  supabaseClient = createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, detectSessionInUrl: false },
  });

  return supabaseClient;
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
