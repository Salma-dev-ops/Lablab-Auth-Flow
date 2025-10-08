"use client";
import { useState } from "react";

interface AuthFormProps {
  onLogin: (username: string, password: string) => void;
}

export default function AuthForm({ onLogin }: AuthFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
      <h2 className="text-2xl font-bold mb-4 text-center">🔐 Login</h2>
      <input
        className="border p-2 rounded"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Login
      </button>
    </form>
  );
}
