import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

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

    const db = getDb();
    const stmt = db.prepare(`
      INSERT INTO suggestions (first_name, last_name, phone, email, where_found, source_link)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(firstName, lastName, phone, email, whereFound, sourceLink);

    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 });
  } catch (err) {
    console.error('DB error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
  
}