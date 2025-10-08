export class AuthService {
    login(username: string, password: string): string | null {
      if (username && password) {
        return "afro-token-" + Date.now();
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
  