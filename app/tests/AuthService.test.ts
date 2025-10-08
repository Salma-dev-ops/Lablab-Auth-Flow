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

  