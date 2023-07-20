"use client";

import { useForm } from "react-hook-form";
import { clsx } from "clsx";

function Error({ message }: { message: string }) {
  return (
    <div className="rounded  border border-red-300 bg-red-50 p-1 text-red-600">
      {message}
    </div>
  );
}

export default function AddStundentPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className={clsx("flex h-screen w-full items-center justify-center")}>
      <form
        className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold">Add</h1>
        <br />
        <label htmlFor="name">Student Name</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="text"
          {...register("name", {
            required: { value: true, message: "Full Name Required" },
            pattern: {
              value: /^[^\S\r\n]{0,15}[\S\s]{0,30}[^\S\r\n]{0,15}$/,
              message: "Invalid Full Name",
            },
          })}
        />
        {errors.name && <Error message={errors.name.message!} />}

        <label htmlFor="course-name">Course Name</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="text"
          {...register("courseName", {
            required: { value: true, message: "Course Name Required" },
            pattern: {
              value: /^[^\S\r\n]{0,15}[\S\s]{0,30}[^\S\r\n]{0,15}$/,
              message: "Invalid Course Name",
            },
          })}
        />
        {errors.courseName && <Error message={errors.courseName.message!} />}

        <label htmlFor="score">Score</label>
        <select {...register("score")}>
          <option value="a">A</option>
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
