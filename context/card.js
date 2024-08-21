import { create } from "zustand";

export const useCardStore = create((set) => ({
  cards: [], // Array untuk menyimpan card yang ditambahkan
  addcard: (newcard) => set((state) => ({ cards: [...state.cards, newcard] })),
}));
