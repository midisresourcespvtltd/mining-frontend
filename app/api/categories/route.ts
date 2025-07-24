import { NextResponse } from 'next/server';
import { getData } from '@/app/lib/sanity';

export async function GET(
  request: Request,
) {
  try {
    const query = `
      *[_type == "category"]{
        ...,
      }
    `;
    
    const data = await getData(query);

    if (!data) {
      return NextResponse.json(
        { 
          error: 'categories not found',
        //   details: 'No news found with the provided ID'
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
        error: 'Failed to fetch news',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 