import { create } from "zustand";
import { RoutesDataStore } from "../types";
import API from "../../api";

export const useRoutesData = create<RoutesDataStore>((set) => ({
  routes: [],

  fetchRoutes: async () => {
    const data = await API.getRoutes();
    set({
      routes: data,
    });
  },
}));
