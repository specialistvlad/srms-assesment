import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All results",
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>All Results</h1>
      <section>{children}</section>
    </div>
  );
}
