"use client";

import { useForm } from "react-hook-form";
import { clsx } from "clsx";
import useSWR from "swr";
import { postResults } from "../../provider";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// import { rootUrl, getStudents, getCourses } from "../../provider";
import { rootUrl } from "../../provider";

function Error({ message }: { message: string }) {
  return (
    <div className="rounded  border border-red-300 bg-red-50 p-1 text-red-600">
      {message}
    </div>
  );
}

export default function AddResultPage() {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { data: students, error: studentsError } = useSWR(
    `${rootUrl}/students`,
    fetcher
  );
  const { data: courses, error: coursesError } = useSWR(
    `${rootUrl}/courses`,
    fetcher
  );

  if (coursesError || studentsError) return <div>Failed to load</div>;
  if (!courses || !students) return <div>Loading...</div>;

  console.log(courses, students);
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className={clsx("flex h-screen w-full items-center justify-center")}>
      <form
        className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-8"
        onSubmit={handleSubmit(postResults.bind(this, reset, clearErrors))}
      >
        <h1 className="font-bold">Add</h1>
        <br />
        <label htmlFor="studentId">Student</label>
        <select {...register("studentId")}>
          {students.map((items) => (
            <option key={items._id} value={items._id}>
              {items.firstName} {items.lastName}
            </option>
          ))}
        </select>
        {errors.studentId && <Error message={errors.studentId.message!} />}

        <label htmlFor="courseId">Course</label>
        <select {...register("courseId")}>
          {courses.map((items) => (
            <option key={items._id} value={items._id}>
              {items.courseName}
            </option>
          ))}
        </select>
        {errors.courseId && <Error message={errors.courseId.message!} />}

        <label htmlFor="score">Score</label>
        <select {...register("score")}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
        </select>
        {errors.score && <Error message={errors.score.message!} />}

        <button className="mt-5 rounded bg-green-500 p-2 text-neutral-50">
          Submit
        </button>
      </form>
    </div>
  );
}
