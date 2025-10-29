import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      if (email && password) setStatus("success");
      else setStatus("error");
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <BackButton />
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-3 w-80">
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit">{status === "loading" ? "Logging in..." : "Login"}</Button>
      </form>

      {status === "success" && <p className="text-green-600 mt-3">Logged in!</p>}
      {status === "error" && <p className="text-red-600 mt-3">Invalid</p>}
    </div>
  );
}
