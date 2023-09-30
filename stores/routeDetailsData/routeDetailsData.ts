import { create } from "zustand";
import { RouteDetailsDataStore, MapPoint } from "../types";
import API from "../../api";

export const useRouteDetailsData = create<RouteDetailsDataStore>((set) => ({
  routeDetails: null,

  fetchRouteDetails: async (id: string) => {
    const data = await API.getMapPoint(id);
    set({
      routeDetails: data,
    });
  },
}));
