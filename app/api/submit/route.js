import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('[submit] Missing Supabase config');
}

const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, whereFound, sourceLink } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required.', body },
        { status: 400 }
      );
    }

    console.log('[submit] payload', body);

    if (!supabase) {
      return NextResponse.json({
        error: 'Supabase config missing',
        setenv: {
          NEXT_PUBLIC_SUPABASE_URL: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
          NEXT_PUBLIC_SUPABASE_ANON_KEY: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
          SUPABASE_URL: Boolean(process.env.SUPABASE_URL),
          SUPABASE_ANON_KEY: Boolean(process.env.SUPABASE_ANON_KEY),
        }
      }, { status: 500 });
    }

    const { data, error } = await supabase
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
      return NextResponse.json({ error: 'supabase insert failed', details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });

  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}