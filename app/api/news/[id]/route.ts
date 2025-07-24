import { NextResponse } from 'next/server';
import { getData } from '@/app/lib/sanity';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const query = `
      *[_type == "news" && _id == "${params.id}"][0]{
        ...,
        "category": category[]->{
          _id,
          name
        },
        country->{_id, name}
      }
    `;
    
    const data = await getData(query);

    if (!data) {
      return NextResponse.json(
        { 
          error: 'News not found',
          details: 'No news found with the provided ID'
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