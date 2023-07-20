import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <div>Menu</div>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/students/add">Add New Students</Link>
      <br />
      <Link href="/students">Students List</Link>
      <br />
      <Link href="/courses/add">Add New Courses</Link>
      <br />
      <Link href="/courses">Courses List</Link>
      <br />
      <Link href="/results/add">Add New Results</Link>
      <br />
      <Link href="/results">Results List</Link>
      <br />
    </>
  );
}
