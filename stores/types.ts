export type Marker = {
  coordinate: Coord;
};

export type Coord = {
  latitude: number;
  longitude: number;
};

export type MapPoint = {
  id: number;
  name: string;
  short_description: string;
  coordinate: Coord;
  main_image: string;
  paragraphs: Array<Paragraph>;
};

export type MapRoute = {
  name: string;
  short_description: string;
  hero: Hero;
  route_points: Array<MapPoint>;
};

export type CitiesDataStore = {
  cities: Array<CitiesType>;
  fetchCities: () => Promise<void>;
};
export type RoutesDataStore = {
  routes: Array<MapRoute>;
  fetchRoutes: (id: string) => Promise<void>;
};
export type TracksDataStore = {
  tracks: Array<TrackType>;
  fetchTracks: (id: string) => Promise<void>;
};

export type RouteDataStore = {
  route: MapRoute | null;
  fetchMapData: (id: string) => Promise<void>;
};

export type RouteDetailsDataStore = {
  routeDetails: MapPoint | null;
  fetchRouteDetails: (id: string) => Promise<void>;
};

export type CitiesType = { id: number; name: string };

export type Hero = {
  image: string;
  name: string;
};

export type TrackType = {
  city: number;
  id: number;
  description: string;
  image: string;
  name: string;
  starting_point_title: string;
  duration: string;
  route_type: string;
  hero: Hero;
};

export type Paragraph = {
  id: number;
  order: number;
  text: string;
  image: string;
  image_description: string;
  route_point: number;
};

export type RoutePointData = {
  id: number;
  name: string;
  short_description: string;
  coordinate: Coord;
  main_image: string;
  visited_by_user: boolean;
  paragraphs: Array<Paragraph>;
};

export type RoutePointsDataStore = {
  routePointData: RoutePointData | null;
  fetchRoutePointsData: (id: number) => void;
};
