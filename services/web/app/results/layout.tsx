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
    <div className="w-full items-center justify-center">
      <div className="flex flex-col gap-2 rounded-lg">
        <h1 className="text-2xl font-bold">Results</h1>
        <section>{children}</section>
      </div>
    </div>
  );
}
