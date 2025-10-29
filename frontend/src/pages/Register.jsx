import { useForm } from "react-hook-form";
import { useRegister } from "../hooks/useAuth";
import Input from "../components/Input";
import Button from "../components/Button";
import BackButton from "../components/BackButton";
import { isValidEmail, isStrongPassword } from "../utils/validators";

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { submitRegister, isLoading, isError, isSuccess, error } = useRegister();

  const onSubmit = (data) => {
    console.log("Form submitted with:", data);
    submitRegister(data);
  };


  return (
    <div className="max-w-sm mx-auto mt-10">
      <BackButton />
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          {...register("email", {
            required: "Email is required",
            validate: (v) => isValidEmail(v) || "Invalid email format"
          })}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <Input
          {...register("password", {
            required: "Password is required",
            validate: (v) => isStrongPassword(v) || "Password must be ≥ 6 chars"
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <Button type="submit">{isLoading ? "Registering..." : "Register"}</Button>
      </form>

      {isSuccess && <p className="text-green-600 mt-3">Registered successfully!</p>}
      {isError && <p className="text-red-600 mt-3">{error?.response?.data.message}</p>}
    </div>
  );
}
