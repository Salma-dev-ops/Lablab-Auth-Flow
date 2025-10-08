export class AuthService {
  static login(email: string, password: string): string | null {
    if (email === "test@example.com" && password === "password123") {
      return "fake-jwt-token";
    }
    return null;
  }
}
