import { NextResponse } from 'next/server';
import { getData } from '@/app/lib/sanity';

export async function GET() {
  try {
    // Example query - modify this according to your schema
    const query = `
    *[_type == "news"] | order(createdAt desc){
      ...,
      category[]->{_id, name},
      country->{_id, name}
    }
    `;
  
    const data = await getData(query);

    return NextResponse.json({
      status: 'success',
      data
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Failed to fetch data from Sanity',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 