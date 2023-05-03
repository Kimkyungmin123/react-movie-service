import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PageState {
  page: number;
  setPage: (page: number) => void;
  increasePage: (num: number) => void;
  decreasePage: (num: number) => void;
}

export const usePageStore = create<PageState>()((set) => ({
  page: 1,
  setPage: (page) => set(() => ({ page })),
  increasePage: (num) => set((state) => ({ page: state.page + num })),
  decreasePage: (num) => set((state) => ({ page: state.page - num })),
}));
