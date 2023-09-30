import { create } from "zustand";
import { RouteDataStore } from "../types";
import API from "../../api";

export const useMapData = create<RouteDataStore>((set) => ({
  route: null,

  fetchMapData: async (id: string) => {
    const data = await API.getMapData(id);
    set({
      route: data,
    });
  },
}));
