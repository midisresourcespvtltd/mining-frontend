import { NextResponse } from 'next/server';
import { getData } from '@/app/lib/sanity';

export async function GET() {
  try {
    const query = `*[_type == "magazine"] | order(_createdAt desc) {
      ...,
    }`;

    const magazineData = await getData(query);

    return NextResponse.json({
      success: true,
      data: magazineData
    });
  } catch (error) {
    console.error('Error fetching magazine data:', error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch magazine data"
      },
      { status: 500 }
    );
  }
} 