import { NextResponse } from 'next/server';
import { universalGet, universalPost } from "../../providers";

export async function GET(request: Request) {
  const result = await universalGet('students');
  return NextResponse.json(result)
}

export async function POST(request: Request) {
  const body = await request.json();
  const result = await universalPost('students', {
    firstName: body.firstName,
    lastName: body.lastName,
    birthday: body.birthday,
    email: body.email,
  });

  return new Response("This is a new API route");
}
