import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.next_public_supabase_url,
  process.env.next_public_supabase_anon_key
);

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
```

Also update your `.env.local` to match:
```
next_public_supabase_url=https://kxdldhlozbdschlbuxhi.supabase.co
next_public_supabase_anon_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZGxkaGxvemJkc2NobGJ1eGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MDg5NDIsImV4cCI6MjA4OTI4NDk0Mn0.uLj95kyz654RDj9ZSmJKo9GFSLowb_bthwOWTuoU_bM