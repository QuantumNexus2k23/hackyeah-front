export type Marker = {
  coordinate: Coord;
};

export type Coord = {
  latitude: number;
  longitude: number;
};

export type MapPoint = {
  latitude: number;
  longitude: number;
};

export type MapRoute = {
  name: string;
  description: string;
  routePoints: Array<MapPoint>;
};

export type MapDataStore = {
  routes: Array<MapRoute>;
  fetchRoutes: () => Promise<void>;
};
