import { getResults } from '../providers';

export default async function ResultsPage() {
  const data = await getResults();
  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Student</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((items) => (
            <tr key={items._id.toString()}>
              <td className="border px-4 py-2">{items.courseName}</td>
              <td className="border px-4 py-2">{items.studentName}</td>
              <td className="border px-4 py-2">{items.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
