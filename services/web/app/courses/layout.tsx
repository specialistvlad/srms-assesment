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
    <div className="w-full items-center justify-center">
      <div className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-8">
        <h1 className="text-2xl font-bold">Courses</h1>
        <section>{children}</section>
      </div>
    </div>
  );
}
