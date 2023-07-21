import { universalRemove } from "../../../providers";

export async function DELETE(request: Request, context) {
  console.log("delete", request.url, context);
  const id = context?.params?.id;
  const result = await universalRemove('courses', id);

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

  console.log(`Course with ID ${id} successfully deleted.`);
  return new Response(`Course with ID ${id} successfully deleted.`, {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
