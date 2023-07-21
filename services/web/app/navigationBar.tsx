import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <Link
        className="block mb-4 text-blue-600 hover:text-blue-800"
        href="/"
        style={{ minWidth: "100px" }}
      >
        🏠 Home
      </Link>
      <Link
        className="block mb-4 text-blue-600 hover:text-blue-800"
        href="/students/add"
        style={{ minWidth: "100px" }}
      >
        ➕ Add New Student
      </Link>
      <Link
        className="block mb-4 text-blue-600 hover:text-blue-800"
        href="/students"
        prefetch={false}
        style={{ minWidth: "100px" }}
      >
        🧑‍🎓 Students List
      </Link>
      <Link
        className="block mb-4 text-blue-600 hover:text-blue-800"
        href="/courses/add"
        prefetch={false}
        style={{ minWidth: "100px" }}
      >
        ➕ Add New Course
      </Link>
      <Link
        className="block mb-4 text-blue-600 hover:text-blue-800"
        href="/courses"
        prefetch={false}
        style={{ minWidth: "100px" }}
      >
        📗 Courses List
      </Link>
      <Link
        className="block mb-4 text-blue-600 hover:text-blue-800"
        href="/results/add"
        style={{ minWidth: "100px" }}
      >
        ➕ Add New Result
      </Link>
      <Link
        className="block mb-4 text-blue-600 hover:text-blue-800"
        href="/results"
        style={{ minWidth: "100px" }}
      >
        🥇 Results List
      </Link>
    </div>
  );
}
