import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      if (email && password) setStatus("success");
      else setStatus("error");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg">
        <BackButton />
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none cursor-pointer bg-transparent border-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <Button type="submit">
            {status === "loading" ? "Logging in..." : "Login"}
          </Button>
        </form>

        {status === "success" && (
          <p className="text-green-600 mt-4 text-center">Logged in!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4 text-center">Invalid credentials</p>
        )}
      </div>
    </div>
  );
}
