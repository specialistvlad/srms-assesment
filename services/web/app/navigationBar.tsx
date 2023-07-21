import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <Link href="/">🏠 Home</Link>
      <br />
      <Link href="/students/add">➕ Add New Student</Link>
      <br />
      <Link href="/students" prefetch={false}>🧑‍🎓 Students List</Link>
      <br />
      <br />
      <Link href="/courses/add" prefetch={false}>➕ Add New Course</Link>
      <br />
      <Link href="/courses" prefetch={false}>📗 Courses List</Link>
      <br />
      <br />
      <Link href="/results/add">➕ Add New Result</Link>
      <br />
      <Link href="/results">🥇 Results List</Link>
      <br />
    </>
  );
}
