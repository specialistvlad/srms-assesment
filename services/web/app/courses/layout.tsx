import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All courses",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">All Courses</h1>
      <section>{children}</section>
    </div>
  );
}
