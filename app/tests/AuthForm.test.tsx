import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from '../components/AuthForm';

test('renders login form and submits', () => {
  render(<AuthForm />);
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'salma@heri.africa' },
  });
  fireEvent.change(screen.getByLabelText(/password/i), {
    target: { value: 'securePass123' },
  });
  fireEvent.click(screen.getByText(/login/i));
  expect(screen.getByText(/logging in/i)).toBeInTheDocument();
});
