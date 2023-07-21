"use client";
// import { useRouter, usePathname, useSearchParams } from 'next/navigation'

import { useForm } from "react-hook-form";

async function post(reset, clearErrors, data) {
  try {
    const response = await fetch(`/api/courses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status !== 200) {
      alert("Unable to submit due server error, see console(requests).");
      return;
    }
    alert("Course has been added!");
    reset();
    clearErrors({});
  } catch (error) {
    console.error(error);
  }
}

function Error({ message }: { message: string }) {
  return (
    <div className="rounded  border border-red-300 bg-red-50 p-1 text-red-600">
      {message}
    </div>
  );
}

export default function AddCoursePage() {

  // const router = useRouter()
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  return (
    <div className={"flex h-screen w-full items-center justify-center"}>
      <form
        className="flex flex-col gap-2 rounded-lg p-8"
        onSubmit={handleSubmit(post.bind(this, reset, clearErrors))}
      >
        <h1 className="font-bold">Add</h1>
        <br />
        <label htmlFor="course-name">Name</label>
        <input
          className="rounded border border-neutral-200 p-1"
          type="text"
          {...register("courseName", {
            required: { value: true, message: "Course Name Required" },
            pattern: {
              value: /^[^\S\r\n]{0,15}[\S\s]{0,30}[^\S\r\n]{0,15}$/,
              message: "Invalid Course Name",
            },
          })}
        />
        {errors.courseName && (
          <Error message={String(errors.courseName.message)} />
        )}
        <button className="mt-5 rounded bg-green-500 p-2 text-neutral-50">
          Submit
        </button>
      </form>
    </div>
  );
}
