"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";
import { AuthService } from "@/src/services/AuthService";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();
  const service = new AuthService();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = service.login(username, password);
    if (token) {
      localStorage.setItem("token", token);
      login(username, password);
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
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
          Sign In
        </button>
      </form>
    </main>
  );
}
