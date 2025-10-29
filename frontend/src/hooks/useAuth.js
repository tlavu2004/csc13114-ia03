import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/userService";

export function useRegister() {
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Registration success:", data);
    },
    onError: (err) => {
      console.error("Registration error:", err);
    },
  });

  const submitRegister = (data) => {
    console.log("Registering:", data);
    mutation.mutate(data);
  };

  return { ...mutation, submitRegister };
}
