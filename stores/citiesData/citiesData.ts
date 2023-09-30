import { create } from "zustand";
import { CitiesDataStore } from "../types";
import API from "../../api";

export const useCitiesData = create<CitiesDataStore>((set) => ({
  cities: [],

  fetchCities: async () => {
    const data = await API.getCities();
    set({
      cities: data,
    });
  },
}));
