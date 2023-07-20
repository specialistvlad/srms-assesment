import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Students",
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">All Students</h1>
      <section>{children}</section>
    </div>
  );
}
