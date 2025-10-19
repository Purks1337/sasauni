import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from Sasauni Next.js Template!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
}
