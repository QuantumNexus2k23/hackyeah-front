import { create } from "zustand";
import { HeroesDataStore } from "../types";
import API from "../../api";

export const useHeroesData = create<HeroesDataStore>((set) => ({
  heroes: [],

  fetchHeroes: async () => {
    const data = await API.getHeroes();
    set({
      heroes: data,
    });
  },
}));
