import { NextResponse } from 'next/server';
import { authMiddleware } from '@/app/middleware/auth';
import connectDB from '@/app/lib/mongodb';
import User from '@/app/models/User';

export async function GET(request: Request) {
  // First, check authentication
  const authResponse = await authMiddleware(request as any);
  if (authResponse.status !== 200) {
    return authResponse;
  }

  try {
    await connectDB();

    // Get user ID from headers (set by middleware)
    const userId = request.headers.get('x-user-id');
    
    // Fetch user data
    const user = await User.findById(userId).select('-password');
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Protected route accessed successfully',
      user,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
} 