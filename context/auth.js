import { create } from "zustand";

export const useAuth = create((set) => ({
  nama: "",
  hasslogged: false,
  login: () => set({ hasslogged: true, nama }),
  logout: () => set({ hasslogged: false, nama: "" }),
}));
