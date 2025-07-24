import { NextResponse } from 'next/server';

export const revalidate = 86400; // 24 hours in seconds

export async function GET() {
  try {
    const apiKey = "7272250f2ce05aa846e53fd6ca4206b7";
    const base = 'USD';
    const currencies = 'EUR,XAU,XAG,XPT';

    const response = await fetch(
      `https://api.metalpriceapi.com/v1/latest?api_key=${apiKey}&base=${base}&currencies=${currencies}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        next: {
          revalidate: 86400 // 24 hours in seconds
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch metal prices');
    }

    const data = await response.json();

    return NextResponse.json({
      status: 'success',
      data,
      lastUpdated: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Failed to fetch metal prices',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 