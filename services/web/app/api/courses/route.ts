import { universalPost } from "../../providers";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await universalPost("courses", {
    courseName: body.courseName,
  });
  return new Response("This is a new API route");
}
