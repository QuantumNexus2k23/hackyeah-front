import { create } from "zustand";
import { MapDataStore } from "./types";
import API from "../../api";

export const useMapData = create<MapDataStore>((set) => ({
  routes: [],

  fetchRoutes: async () => {
    const data = await API.getRoutes();
    console.log(data);
    set({
      routes: data,
    });
  },
}));
