import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthForm from "../../src/components/AuthForm";

describe("AuthForm Component", () => {
  test("renders login form and submits", async () => {
    const user = userEvent.setup();
    const mockLogin = vi.fn();

    render(<AuthForm onLogin={mockLogin} />);

    // Fill email
    const emailInput = screen.getByTestId("email-input");
    await user.type(emailInput, "test@example.com");

    // Fill password
    const passwordInput = screen.getByTestId("password-input");
    await user.type(passwordInput, "password123");

    // Submit the form
    const form = screen.getByTestId("login-form");
    await user.submit(form);

    // Assert the login handler was called with the right arguments
    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith("test@example.com", "password123");
  });
});
