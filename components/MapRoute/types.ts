import { Coord } from "../../stores/types";

export type MapRouteProps = {
  initLocation: Coord | null;
  coordinates: Coord[];
  imageURL: string;
};
