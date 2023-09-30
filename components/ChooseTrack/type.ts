export type TrackType = {
  id: number;
  image_url: string;
  name: string;
  details: {
    starting_point: string;
    duration: number;
    route_type: string;
  };
  hero: {
    url: string;
    name: string;
  };
};
