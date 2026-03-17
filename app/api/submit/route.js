import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.next_public_supabase_url || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.next_public_supabase_anon_key || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, whereFound, sourceLink } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required.' },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from('suggestions')
      .insert([{
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        email: email,
        where_found: whereFound,
        source_link: sourceLink,
      }]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}