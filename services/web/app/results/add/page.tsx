"use client";

import { useForm } from "react-hook-form";
// import { useRouter } from 'next/navigation';
import { clsx } from "clsx";
import useSWR from "swr";

const fetcher = (url, options) => fetch(url, options).then((res) => res.json());

function Error({ message }: { message: string }) {
  return (
    <div className="rounded  border border-red-300 bg-red-50 p-1 text-red-600">
      {message}
    </div>
  );
}

async function post(reset, clearErrors, data) {
  try {
    const response = await fetch(`/api/results`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status !== 200) {
      alert("Unable to submit due server error, see console(requests).");
      return;
    }
    alert("Result has been added!");
    reset();
    clearErrors({});
  } catch (error) {
    console.error(error);
  }
  location.reload();
}

export default function AddResultPage() {
  // useRouter();
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { data: students, error: studentsError } = useSWR(
    "/api/students",
    fetcher
  );

  const { data: courses, error: coursesError } = useSWR(
    "/api/courses",
    fetcher
  );

  if (coursesError || studentsError) return <div>Failed to load</div>;
  if (!courses || !students) return <div>Loading...</div>;

  return (
    <div className="flex w-full items-center justify-center">
      <div style={{ minWidth: "300px" }}>
        <form
          className="flex flex-col gap-2 rounded-lg"
          onSubmit={handleSubmit(post.bind(this, reset, clearErrors))}
        >
          <h1 className="font-bold">Add</h1>
          <br />

          <label htmlFor="studentId">Student</label>
          <select
            className="rounded border border-neutral-200 p-1"
            {...register("studentId")}
          >
            {students.map((items) => (
              <option key={items._id} value={items._id}>
                {items.firstName} {items.lastName}
              </option>
            ))}
          </select>
          {errors.studentId && (
            <Error message={String(errors.studentId.message)} />
          )}

          <label htmlFor="courseId">Course</label>
          <select
            className="rounded border border-neutral-200 p-1"
            {...register("courseId")}
          >
            {courses.map((items) => (
              <option key={items._id} value={items._id}>
                {items.courseName}
              </option>
            ))}
          </select>
          {errors.courseId && (
            <Error message={String(errors.courseId.message)} />
          )}

          <label htmlFor="score">Score</label>
          <select {...register("score")}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
          {errors.score && <Error message={String(errors.score.message)} />}

          <button className="mt-5 rounded bg-green-500 p-2 text-neutral-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
