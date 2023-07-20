import { log } from "console";

async function getData() {
  const res = await fetch(`http://localhost:5123/students`, { cache: 'no-store' });
  return await res.json();
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
            <td>
              {items.firstName} {items.lastName}
            </td>
            <td>{items.birthday}</td>
            <td>{items.email}</td>
            <td>❌</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
