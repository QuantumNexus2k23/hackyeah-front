import { create } from "zustand";
import { RoutePointsDataStore } from "../types";
import API from "../../api";

export const useRoutePointsData = create<RoutePointsDataStore>((set) => ({
  routePointData: null,

  fetchRoutePointsData: async (id: number) => {
    const data = await API.getRoutePointsData(id);
    set({
      routePointData: data,
    });
  },
}));
