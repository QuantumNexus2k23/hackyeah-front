import { create } from "zustand";
import { HeroeDataStore, HeroesBadgesDataStore } from "../types";
import API from "../../api";

export const useHeroeData = create<HeroeDataStore>((set) => ({
  heroe: null,

  fetchHeroe: async (id: number) => {
    const data = await API.getHeroById(id);
    set({
      heroe: data,
    });
  },
}));
export const useHeroeBadgesData = create<HeroesBadgesDataStore>((set) => ({
  routes: null,

  fetchRoutes: async (id: string) => {
    const data = await API.getHeroesBadge(id);
    set({
      routes: data,
    });
  },
}));
