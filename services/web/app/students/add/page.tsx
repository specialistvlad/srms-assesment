"use client";

import { useForm } from "react-hook-form";
import { clsx } from "clsx";

async function post(reset, clearErrors, data) {
  try {
    const response = await fetch(`/api/students`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.status !== 200) {
      alert("Unable to submit due server error, see console(requests).");
      return;
    }
    alert("Student has been added!");
    reset();
    clearErrors({});
  } catch (error) {
    console.error(error);
  }
  location.reload();
}

function Error({ message }: { message: string }) {
  return (
    <div className="rounded  border border-red-300 bg-red-50 p-1 text-red-600">
      {message}
    </div>
  );
}

function isValidDate(dateString: string): string | boolean {
  const currentDate: Date = new Date();
  const inputDate: Date = new Date(dateString);

  // Calculate the difference in years between the current date and the input date
  const yearDifference: number =
    currentDate.getFullYear() - inputDate.getFullYear();

  // Check if the total difference is greater than 10 years
  if (yearDifference < 10) {
    return "Student must be at least 10 years old.";
  }

  return true;
}

export default function AddStundentPage() {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex w-full items-center justify-center">
      <form
        className="flex flex-col gap-2 rounded-lg"
        onSubmit={handleSubmit(post.bind(this, reset, clearErrors))}
      >
        <h1 className="font-bold">Add</h1>
        <br />
        <label htmlFor="firstName">First Name</label>
        <input
          className="rounded border border-neutral-200 p-1"
          type="text"
          name="firstName"
          {...register("firstName", {
            required: { value: true, message: "First Name Required" },
            pattern: {
              value: /^[^\S\r\n]{0,15}[\S\s]{0,30}[^\S\r\n]{0,15}$/,
              message: "Invalid Full Name",
            },
          })}
        />
        {errors.firstName && (
          <Error message={String(errors.firstName.message)} />
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          className="rounded border border-neutral-200 p-1"
          type="text"
          name="lastName"
          {...register("lastName", {
            required: { value: true, message: "Last Name Required" },
            pattern: {
              value: /^[^\S\r\n]{0,15}[\S\s]{0,30}[^\S\r\n]{0,15}$/,
              message: "Invalid Full Name",
            },
          })}
        />
        {errors.lastName && <Error message={String(errors.lastName.message)} />}

        <label htmlFor="birthday">Birthday</label>
        <input
          className="rounded border border-neutral-200 p-1"
          type="date"
          placeholder="mm/dd/yyyy"
          {...register("birthday", {
            required: { value: true, message: "Birthday Required" },
            validate: isValidDate,
          })}
        />
        {errors.birthday && <Error message={String(errors.birthday.message)} />}

        <label htmlFor="email">Email</label>
        <input
          className="rounded border border-neutral-200 p-1"
          type="email"
          {...register("email", {
            required: { value: true, message: "Email Required" },
            pattern: {
              value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid Email",
            },
          })}
        />
        {errors.email && <Error message={String(errors.email.message)} />}
        <button className="mt-5 rounded bg-green-500 p-2 text-neutral-50">
          Submit
        </button>
      </form>
    </div>
  );
}
