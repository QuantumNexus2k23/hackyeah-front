import { Coord } from "../stores/types";

const MULTIPLICATOR = 1.5;

const getRegionFromCoordinates = (coordinates: Array<Coord>) => {
  let minX: number;
  let maxX: number;
  let minY: number;
  let maxY: number;

  if (!coordinates.length) {
    return {
      latitude: 50.06,
      longitude: 19.94,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
  }

  const [first] = coordinates;

  // init first point
  ((point: Coord) => {
    minX = point.latitude;
    maxX = point.latitude;
    minY = point.longitude;
    maxY = point.longitude;
  })(first);

  // calculate rect
  coordinates.map((point) => {
    minX = Math.min(minX, point.latitude);
    maxX = Math.max(maxX, point.latitude);
    minY = Math.min(minY, point.longitude);
    maxY = Math.max(maxY, point.longitude);
  });

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const deltaX = (maxX - minX) * MULTIPLICATOR;
  const deltaY = (maxY - minY) * MULTIPLICATOR;

  return {
    latitude: midX,
    longitude: midY,
    latitudeDelta: deltaX,
    longitudeDelta: deltaY,
  };
};

export default getRegionFromCoordinates;
