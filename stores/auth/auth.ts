import { create } from "zustand";
import { AuthStore, CredentialsData, TokensData } from "./types";
import API from "../../api";

export const useAuth = create<AuthStore>((set) => ({
  access: null,
  refresh: null,
  email: null,
  loading: false,

  setLoadingOff: () => set({ loading: false }),
  setLoadingOn: () => set({ loading: true }),

  login: async (credentials: CredentialsData) => {
    set({ loading: true });
    const tokens = await API.login(credentials);
    set({ ...tokens, loading: false });
  },

  register: async (credentials: CredentialsData) => {
    set({ loading: true });
    await API.register(credentials);
    const tokens = await API.login(credentials);
    set({ ...tokens, loading: false });
  },

  refreshToken: async (refresh: string) => {
    const tokens = await API.refreshToken(refresh);
    set({ ...tokens });
  },

  verifyToken: async (refresh: string) => {
    const tokens = await API.refreshToken(refresh);
    set({ ...tokens });
  },
}));
