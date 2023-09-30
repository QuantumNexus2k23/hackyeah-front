import { FC, useEffect, useReducer, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapWrapper from "../../components/MapWrapper/MapWrapper";
import { Coord, Paragraph } from "../../stores/types";
import getRegionFromCoordinates from "../../utils/coordinates";
import { useMapData } from "../../stores/mapData";

// Mock data
const markers: Array<{ coordinate: Coord }> = [
  {
    coordinate: {
      latitude: 50.06,
      longitude: 19.94,
    },
  },
  {
    coordinate: {
      latitude: 50.073,
      longitude: 19.9422,
    },
  },
  {
    coordinate: {
      latitude: 50.01,
      longitude: 19.93,
    },
  },
  {
    coordinate: {
      latitude: 50.04,
      longitude: 19.97,
    },
  },
  {
    coordinate: {
      latitude: 50.062,
      longitude: 19.94333,
    },
  },
];

const PRIMARY_MARKER_COLOR = "#7E484A";

const Maps: FC = () => {
  const [visitedSteps, addVisitedStep] = useReducer(
    (visited: Array<number>, step: number) => [...visited, step],
    []
  );

  const { route, fetchMapData } = useMapData();
  useEffect(() => {
    fetchMapData("4");
  }, []);

  const [nextStep, setNextStep] = useState<number>(0);
  const [currentId, setCurrentId] = useState<number>(4);
  const coordinates =
    route?.route_points.map(({ coordinate }) => coordinate) ?? [];

  const isVisited = (index: number) => visitedSteps.includes(index);
  const isVisitedOrNext = (index: number) =>
    isVisited(index) || index === nextStep;

  return (
    <View style={{ flex: 1 }}>
      <MapWrapper id={currentId}>
        <MapView
          style={{ width: "100%", height: "70%" }}
          region={getRegionFromCoordinates(coordinates)}
          userInterfaceStyle="light"
        >
          {route?.route_points?.map(({ coordinate }, index) => (
            <Marker
              key={index}
              coordinate={coordinate}
              onPress={() => {
                setCurrentId(route.route_points[index].id);
                setNextStep(index);
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  width: 48,
                  backgroundColor: isVisitedOrNext(index)
                    ? PRIMARY_MARKER_COLOR
                    : "#FFFFFFDD",
                  borderRadius: 2137,
                  borderColor: PRIMARY_MARKER_COLOR,
                  borderWidth: 2,
                  opacity: isVisited(index) ? 0.5 : 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: isVisitedOrNext(index)
                      ? "white"
                      : PRIMARY_MARKER_COLOR,
                  }}
                >
                  {index + 1}
                </Text>
              </View>
            </Marker>
          ))}
        </MapView>
      </MapWrapper>
    </View>
  );
};

export default Maps;
