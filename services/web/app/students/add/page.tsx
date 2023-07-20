"use client";

import { useForm } from "react-hook-form";
import { clsx } from "clsx";

export default function AddStundentsPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className={clsx("flex h-screen w-full items-center justify-center")}>
      <form
        className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold">Add</h1><br/>
        <label htmlFor="student-name">Name</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="text"
          {...register("student-name")}
        />

        <label htmlFor="birthday">Expiry Date</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="text"
          placeholder="mm/dd/yy"
          {...register("birthday")}
        />

        <label htmlFor="email">Email</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="email"
          {...register("email")}
        />

        <button className="mt-5 rounded bg-green-500 p-2 text-neutral-50">
          Submit
        </button>
      </form>
    </div>
  );
}
