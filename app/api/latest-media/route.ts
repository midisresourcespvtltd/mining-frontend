import { NextResponse } from 'next/server';
import { getData } from '@/app/lib/sanity';

export async function GET() {
  try {
    const query = `*[_type == "latestMedia"] | order(_createdAt desc)[0...4] {
      _id,
      title,
      category,
      thumbnail,
      date,
      "createdBy": createdBy->name
    }`;

    const latestMediaData = await getData(query);

    return NextResponse.json({
      success: true,
      data: latestMediaData
    });
  } catch (error) {
    console.error('Error fetching latest media:', error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch latest media"
      },
      { status: 500 }
    );
  }
} 