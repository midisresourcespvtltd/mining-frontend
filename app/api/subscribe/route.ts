import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/app/lib/sanity';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 });
    }

    // Create a new document in Sanity (type: 'subscriber')
    const doc = {
      _type: 'subscriber',
      email,
      subscribedAt: new Date().toISOString(),
    };
    await client.create(doc);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
