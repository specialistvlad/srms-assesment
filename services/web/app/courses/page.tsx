import { DeleteButton } from "./delete";
import { universalGet } from "../providers";

export const revalidate = 0;

export default async function CoursesPage() {
  const data = await universalGet("courses");
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Course Name</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr key={items._id.toString()}>
              <td className="border px-4 py-2">{items.courseName}</td>
              <td className="border px-4 py-2 text-center">
                <DeleteButton itemId={items._id.toString()} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
