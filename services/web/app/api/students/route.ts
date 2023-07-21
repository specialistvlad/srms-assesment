import { postStudents } from "../../prov";

export async function POST(request: Request) {
  const body = await request.json()
  const result = await postStudents({
    firstName: body.firstName,
    lastName: body.lastName,
    birthday: body.birthday,
    email: body.email,
  });

  return new Response("This is a new API route");
}
