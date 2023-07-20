import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Course",
};

export default function AddCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}
