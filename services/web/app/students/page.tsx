import { DeleteButton } from "./delete";
import { getStudents } from "../provider";

function convertDateToCanadian(value): string {
  // Convert the date string to a Date object
  const birthdayDate = new Date(value);

  // Get the individual components of the date (month, day, year)
  const month = String(birthdayDate.getMonth() + 1).padStart(2, "0");
  const day = String(birthdayDate.getDate()).padStart(2, "0");
  const year = birthdayDate.getFullYear();

  // Create the formatted date string
  return `${month}/${day}/${year}`;
}

export default async function StundentsPage() {
  const data = await getStudents();

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Birthday</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr key={items._id}>
              <td className="border px-4 py-2">
                {items.firstName} {items.lastName}
              </td>
              <td className="border px-4 py-2">
                {convertDateToCanadian(items.birthday)}
              </td>
              <td className="border px-4 py-2">{items.email}</td>
              <td className="border px-4 py-2">
                <DeleteButton entity="courses" itemId={items._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
