import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  try {
    // Connect to database
    await connectDB();
    
    // Check if connection is established
    if (!mongoose.connection.db) {
      throw new Error('Database connection not established');
    }
    
    // Get all collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    
    // Check if users collection exists
    const usersCollection = collections.find(col => col.name === 'users');
    
    // Get count of documents in users collection if it exists
    let userCount = 0;
    if (usersCollection) {
      userCount = await mongoose.connection.db.collection('users').countDocuments();
    }

    return NextResponse.json({
      status: 'Database connected successfully',
      collections: collections.map(col => col.name),
      usersCollectionExists: !!usersCollection,
      totalUsers: userCount,
      databaseName: mongoose.connection.db.databaseName
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: 'Database connection failed',
        details: error.message 
      },
      { status: 500 }
    );
  }
} 