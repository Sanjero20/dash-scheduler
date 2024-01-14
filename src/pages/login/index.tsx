import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-900">
      <main className="flex h-96 w-[400px] flex-col gap-4 rounded-xl bg-white p-4">
        <div className="flex h-32 items-center justify-center rounded bg-slate-200">
          LOGO HERE
        </div>

        <form
          onSubmit={handleSubmit}
          id="login-form"
          className="flex w-full flex-col gap-2"
        >
          <label className="font-bold" htmlFor="username">
            Username
          </label>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <Button type="submit" form="login-form">
          Login
        </Button>
      </main>
    </div>
  );
}

export default LoginPage;
