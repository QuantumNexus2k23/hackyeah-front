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
  main_img: string;
  paragraphs: Array<Paragraph>;
};

export type MapRoute = {
  name: string;
  short_description: string;
  route_points: Array<MapPoint>;
};

export type WaypointDetails = {
  main_img: string;
  hero_story: string;
  hero_quote: string;
  paragraphs: Array<Paragraph>;
};

export type Paragraph = {
  id: string;
  order: number;
  text: string;
  image: string;
  image_description: string;
  route_point: number;
};

export type RoutesDataStore = {
  routes: Array<MapRoute>;
  fetchRoutes: (id: string) => Promise<void>;
};

export type RouteDataStore = {
  route: MapRoute | null;
  fetchMapData: (id: string) => Promise<void>;
};
