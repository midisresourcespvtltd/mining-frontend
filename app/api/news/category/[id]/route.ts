import { NextResponse } from 'next/server';
import { getData } from '@/app/lib/sanity';

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          error: 'Invalid request',
          details: 'Category ID is required'
        },
        { status: 400 }
      );
    }

    const query = `*[_type == "news" && references($categoryId)]{
      ...,
      "category": category[]->{
        _id,
        name
      },
      country->{_id, name}
    }`;

    const data = await getData(query, { categoryId: id });

    if (!data || data.length === 0) {
      return NextResponse.json(
        {
          error: 'News not found',
          details: 'No news found for this category'
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
