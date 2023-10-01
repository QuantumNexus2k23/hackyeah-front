import { create } from "zustand";
import { HeroeDataStore } from "../types";
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
