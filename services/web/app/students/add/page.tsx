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

function isValidDate(dateString: string): string | boolean {
  const pattern: RegExp = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19\d\d|20\d\d)$/;

  if (!pattern.test(dateString)) {
    return 'Date format is invalid!'; // Date format is invalid
  }

  const currentDate: Date = new Date();
  const inputDate: Date = new Date(dateString);

  // Calculate the difference in years between the current date and the input date
  const yearDifference: number = currentDate.getFullYear() - inputDate.getFullYear();

  // Check if the total difference is greater than 10 years
  if (yearDifference < 10) {
    return 'Student must be at least 10 years old.';
  }

  return true;
}

export default function AddStundentPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <div className={clsx("flex w-full items-center justify-center")}>
      <form
        className="flex flex-col gap-2 rounded-lg bg-neutral-50 p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold">Add</h1>
        <br />
        <label htmlFor="name">Name</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="text"
          {...register("name", {
            required: { value: true, message: "First Name Required" },
            pattern: {
              value: /^[^\S\r\n]{0,15}[\S\s]{0,30}[^\S\r\n]{0,15}$/,
              message: "Invalid Full Name",
            },
          })}
        />
        {errors.name && <Error message={errors.name.message!} />}

        <label htmlFor="last">Name</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="text"
          {...register("last", {
            required: { value: true, message: "Last Name Required" },
            pattern: {
              value: /^[^\S\r\n]{0,15}[\S\s]{0,30}[^\S\r\n]{0,15}$/,
              message: "Invalid Full Name",
            },
          })}
        />
        {errors.last && <Error message={errors.last.message!} />}

        <label htmlFor="birthday">Expiry Date</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="text"
          placeholder="mm/dd/yyyy"
          {...register("birthday", {
            required: { value: true, message: "Birthday Required" },
            // pattern: {
            //   value:
            //     /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19\d\d|20\d\d)$/,
            //   message: "Invalid Birthday",
            // },
            validate: isValidDate,
          })}
        />
        {errors.birthday && <Error message={errors.birthday.message!} />}

        <label htmlFor="email">Email</label>
        <input
          className="rounded border border-neutral-200 bg-neutral-50 p-1"
          type="email"
          {...register("email", {
            required: { value: true, message: "Email Required" },
            pattern: {
              value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid Email",
            },
          })}
        />
        {errors.email && <Error message={errors.email.message!} />}
        <button className="mt-5 rounded bg-green-500 p-2 text-neutral-50">
          Submit
        </button>
      </form>
    </div>
  );
}
