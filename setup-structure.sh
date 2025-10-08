#!/bin/bash

echo "🚀 Setting up project structure..."

# 1️⃣ Create folders
mkdir -p src/components
mkdir -p src/services
mkdir -p src/ai
mkdir -p app/tests
mkdir -p public

# 2️⃣ Create AuthForm.tsx
cat > src/components/AuthForm.tsx << 'EOF'
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
EOF

# 3️⃣ Create AuthService.ts
cat > src/services/AuthService.ts << 'EOF'
export class AuthService {
  login(username: string, password: string): string | null {
    if (username && password) {
      const token = "afro-token-" + Date.now();
      localStorage.setItem("token", token);
      return token;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
EOF

# 4️⃣ Create chatbot.ts
cat > src/ai/chatbot.ts << 'EOF'
export function chatbotEcho(input: string): string {
  return `🤖 Echo from AfroBot: ${input}`;
}
EOF

# 5️⃣ Create AuthForm.test.tsx
cat > app/tests/AuthForm.test.tsx << 'EOF'
import { render, screen, fireEvent } from "@testing-library/react";
import AuthForm from "../../src/components/AuthForm";

test("renders login form and submits", () => {
  const mockLogin = vi.fn();
  render(<AuthForm onLogin={mockLogin} />);

  const usernameInput = screen.getByPlaceholderText("Username");
  const passwordInput = screen.getByPlaceholderText("Password");
  const button = screen.getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "salma" } });
  fireEvent.change(passwordInput, { target: { value: "1234" } });
  fireEvent.click(button);

  expect(mockLogin).toHaveBeenCalledWith("salma", "1234");
});
EOF

# 6️⃣ Create AuthService.test.ts
cat > app/tests/AuthService.test.ts << 'EOF'
import { AuthService } from "../../src/services/AuthService";

test("login returns a token for valid credentials", () => {
  const service = new AuthService();
  const token = service.login("user", "pass");
  expect(token).toContain("afro-token-");
});

test("logout removes token from localStorage", () => {
  const service = new AuthService();
  localStorage.setItem("token", "fake");
  service.logout();
  expect(localStorage.getItem("token")).toBeNull();
});
EOF

# 7️⃣ Create chatbot.test.ts
cat > app/tests/chatbot.test.ts << 'EOF'
import { chatbotEcho } from "../../src/ai/chatbot";

test("chatbot echoes the input", () => {
  const response = chatbotEcho("Hello AfroBot");
  expect(response).toContain("Hello AfroBot");
});
EOF

# 8️⃣ Optional: Add vitest.config.ts for clean imports
cat > vitest.config.ts << 'EOF'
/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
EOF

echo "✅ Project structure, components, services, and tests created!"
echo "👉 Next: Run your tests with: npx vitest"

