import { create } from "zustand";
import { AuthStore, TokensData } from "./types";

export const useAuth = create<AuthStore>((set) => ({
  access: null,
  refresh: null,
  email: null,
  loading: false,

  setLoadingOff: () => set({ loading: false }),
  setLoadingOn: () => set({ loading: true }),

  setTokens: (tokens: TokensData) => set({ ...tokens, loading: false }),

  setRefreshToken: (refresh: string) => set({ refresh }),
}));
