import { FC, useEffect, useReducer, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapWrapper from "../../components/MapWrapper/MapWrapper";
import getRegionFromCoordinates from "../../utils/coordinates";
import { useMapData } from "../../stores/mapData";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PRIMARY_MARKER_COLOR = "#7E484A";

const Maps: FC = () => {
  const insets = useSafeAreaInsets();
  const [visitedSteps, addVisitedStep] = useReducer(
    (visited: Array<number>, step: number) => [...visited, step],
    []
  );

  const { route, fetchMapData } = useMapData();
  useEffect(() => {
    fetchMapData("4");
  }, []);

  const [nextStep, setNextStep] = useState<number>(0);
  const coordinates =
    route?.route_points.map(({ coordinate }) => coordinate) ?? [];

  const isVisited = (index: number) => visitedSteps.includes(index);
  const isVisitedOrNext = (index: number) =>
    isVisited(index) || index === nextStep;

  console.log(route?.route_points[nextStep].short_description);

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <MapWrapper
        title={route?.route_points[nextStep].name}
        description={route?.route_points[nextStep].short_description}
        pointNumber={nextStep + 1}
      >
        <MapView
          style={{ width: "100%", height: "75%" }}
          region={getRegionFromCoordinates(coordinates)}
          userInterfaceStyle="light"
        >
          {route?.route_points?.map(({ coordinate }, index) => (
            <Marker
              key={index}
              coordinate={coordinate}
              onPress={() => setNextStep(index)}
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
