async function getData() {
  const res = await fetch(`http://localhost:5123/courses`, {
    cache: "no-store",
  });
  return await res.json();
}

export default async function CoursesPage() {
  const data = await getData();
  return (
    <table>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Student</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((items) => (
          <tr key={items.id}>
            <td>{items.courseName}</td>
            <td>❌</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
