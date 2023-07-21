import { ObjectId } from "mongodb";
import { universalPost } from "../../providers";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await universalPost("results", {
    studentId: new ObjectId(body.studentId),
    courseId: new ObjectId(body.courseId),
    score: body.score,
  });

  return new Response("This is a new API route");
}
