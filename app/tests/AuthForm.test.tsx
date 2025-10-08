import { render, screen, fireEvent } from "@testing-library/react";
import AuthForm from "../../src/components/AuthForm";  // ✅ Updated path

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


