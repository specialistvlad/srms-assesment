import { DeleteButton } from "../delete";

async function getData() {
  const res = await fetch(`http://localhost:5123/courses`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function CoursesPage() {
  const data = await getData();
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
            <tr key={items._id}>
              <td className="border px-4 py-2">{items.courseName}</td>
              <td className="border px-4 py-2 text-center">
                <DeleteButton entity="courses" itemId={items._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
