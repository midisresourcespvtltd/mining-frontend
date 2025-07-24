import { NextResponse } from 'next/server';
import { getData } from '@/app/lib/sanity';

export async function GET() {
  try {
    const query = `
      *[_type == "ad" && isActive == true] | order(createdAt desc) {
        _id,
        banner {
          asset->,
          alt
        },
        displayOn,
        position,
        isActive,
        createdAt,
        "imageUrl": banner.asset->url
      }
    `;
    
    const data = await getData(query);

    if (!data) {
      return NextResponse.json(
        { 
          error: 'Advertisements not found',
          details: 'No active advertisements found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      status: 'success',
      data
    });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch advertisements',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 