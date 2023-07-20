import { log } from "console";

async function getData() {
  const res = await fetch(`http://localhost:5123/students`, {
    cache: "no-store",
  });
  return await res.json();
}

function convertDateToCanadian(value): string {
  // Convert the date string to a Date object
  const birthdayDate = new Date(value);

  // Get the individual components of the date (month, day, year)
  const month = String(birthdayDate.getMonth() + 1).padStart(2, '0');
  const day = String(birthdayDate.getDate()).padStart(2, '0');
  const year = birthdayDate.getFullYear();

  // Create the formatted date string
  return `${month}/${day}/${year}`;
}

export default async function StundentsPage() {
  const data = await getData();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthday</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((items) => (
          <tr key={items.id}>
            <td>{items.firstName} {items.lastName}</td>
            <td>{convertDateToCanadian(items.birthday)}</td>
            <td>{items.email}</td>
            <td>❌</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
