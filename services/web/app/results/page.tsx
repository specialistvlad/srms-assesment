async function getData() {
  const res = await fetch(`http://localhost:5123/results`, { cache: 'no-store' });
  return await res.json();
}

export default async function ResultsPage() {
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
          <tr key={items._id}>
            <td>{items.courseName}</td>
            <td>{items.student}</td>
            <td>{items.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
