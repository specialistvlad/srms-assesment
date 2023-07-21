import { removeStudent } from "../../../providers";

export async function DELETE(request: Request, context) {
  console.log("delete", request.url, context);
  const result = await removeStudent(context?.params?.id);

  if (!result) {
    return new Response("Not found", {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  console.log(`Student with ID ${context?.params?.id} successfully deleted.`);
  return new Response("Student with ID ${studentId} successfully deleted.", {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
