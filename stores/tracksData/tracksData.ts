import { create } from "zustand";
import { TracksDataStore } from "../types";
import API from "../../api";

export const useTracksData = create<TracksDataStore>((set) => ({
  tracks: [],

  fetchTracks: async (id: string) => {
    const data = await API.getCityRoutes(id);
    set({
      tracks: data,
    });
  },
}));
