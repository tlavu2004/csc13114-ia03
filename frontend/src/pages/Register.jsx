import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const mutation = useMutation({
    mutationFn: (data) => axios.post("http://localhost:5000/user/register", data),
  });

  const onSubmit = (data) => mutation.mutate(data);

  return (
    <div className="max-w-sm mx-auto mt-10">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="mb-2 text-sm text-gray-600 hover:underline"
        aria-label="Back"
      >
        ← Back
      </button>

      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register("email", { required: true })} placeholder="Email" className="border p-2" />
        {errors.email && <p className="text-red-500">Email is required</p>}

        <input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="Password" className="border p-2" />
        {errors.password && <p className="text-red-500">Password ≥ 6 chars</p>}

        <button type="submit" className="bg-blue-500 text-white py-2">
          Register
        </button>
      </form>

      {mutation.isSuccess && <p className="text-green-600 mt-3">Registered successfully!</p>}
      {mutation.isError && <p className="text-red-600 mt-3">{mutation.error.response?.data.message}</p>}
    </div>
  );
}
