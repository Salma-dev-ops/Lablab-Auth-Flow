import { AuthService } from "../../src/services/AuthService";

test("login returns a token for valid credentials", () => {
  const token = AuthService.login("test@example.com", "password123");
  expect(token).toBe("fake-jwt-token");
});

test("login returns null for invalid credentials", () => {
  const token = AuthService.login("invalid@example.com", "wrong");
  expect(token).toBeNull();
});
