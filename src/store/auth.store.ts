import { create } from "zustand";

interface User {
  id: string;
  username: string;
  email: string;
  preferredLanguage: string;
}

interface AuthState {
  user: User | null;
  token: String | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

const storedUser = localStorage.getItem("monochat_user");
const storedToken = localStorage.getItem("monochat_token");

export const useAuthStore = create<AuthState>((set) => ({
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken ? storedToken : null,

  setAuth: (user, token) => {
    localStorage.setItem("monochat_user", JSON.stringify(user));
    localStorage.setItem("monochat_token", token);

    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("monochat_user");
    localStorage.removeItem("monochat_token");

    set({ user: null, token: null });
  },
}));
