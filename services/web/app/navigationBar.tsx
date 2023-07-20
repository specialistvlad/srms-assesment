import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <Link href="/">🏠 Home</Link>
      <br />
      <Link href="/students/add">➕ Add New Student</Link>
      <br />
      <Link href="/students">🧑‍🎓 Students List</Link>
      <br />
      <br />
      <Link href="/courses/add">➕ Add New Course</Link>
      <br />
      <Link href="/courses">📗 Courses List</Link>
      <br />
      <br />
      <Link href="/results/add">➕ Add New Result</Link>
      <br />
      <Link href="/results">🥇 Results List</Link>
      <br />
    </>
  );
}
