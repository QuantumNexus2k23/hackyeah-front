import { FC, useEffect, useReducer, useState } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapWrapper from "../../components/MapWrapper/MapWrapper";
import getRegionFromCoordinates from "../../utils/coordinates";
import { useMapData } from "../../stores/mapData";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { MapPoint } from "../../stores/types";
import ConfettiCannon from "react-native-confetti-cannon";
import * as Location from "expo-location";
import MapRoute from "../../components/MapRoute";

const PRIMARY_MARKER_COLOR = "#7E484A";

const Maps: FC = () => {
  const { slug } = useLocalSearchParams();

  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);
  const insets = useSafeAreaInsets();

  const { route, fetchMapData } = useMapData();

  useEffect(() => {
    fetchMapData(slug as string);
    const fetchLocation = async () => {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    };
    fetchLocation();
  }, []);

  const [nextStep, setNextStep] = useState<number>(0);

  useEffect(() => {
    const nextStep = route?.route_points.findIndex(
      ({ visited_by_user }) => !visited_by_user
    );
    if (nextStep) setNextStep(nextStep);
  }, [route]);

  const [currentId, setCurrentId] = useState<number>(4);
  const coordinates =
    route?.route_points.map(({ coordinate }) => coordinate) ?? [];

  const isVisited = (routePoint: MapPoint) => routePoint.visited_by_user;
  const isVisitedOrNext = (routePoint: MapPoint, index: number) =>
    isVisited(routePoint) || index === nextStep;
  const allPointsVisited = route?.route_points.every(isVisited);

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <MapWrapper
        name={route?.name}
        id={route?.route_points[nextStep]?.id}
        hero={route?.hero}
        quote="This is where it all started!"
        title={route?.route_points[nextStep]?.name}
        description={route?.route_points[nextStep]?.short_description}
        pointNumber={nextStep + 1}
        currentId={currentId}
        comicsUrl={route?.route_points[nextStep]?.comics_url}
        allPointsVisited={!!allPointsVisited}
      >
        <MapView
          style={{ width: "100%", height: "75%", opacity: allPointsVisited ? 0.4 : 1 }}
          region={getRegionFromCoordinates([
            ...coordinates,
            ...(location ? [location] : []),
          ])}
          userInterfaceStyle="light"
        >
          {route?.route_points?.map(({ coordinate, id }, index) => (
            <Marker
              key={id}
              coordinate={coordinate}
              onPress={() => {
                if (isVisited(route?.route_points[index])) return;
                setNextStep(index);
                setCurrentId(route?.route_points[index]?.id);
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 48,
                  width: 48,
                  backgroundColor: isVisitedOrNext(
                    route?.route_points[index],
                    index
                  )
                    ? PRIMARY_MARKER_COLOR
                    : "#FFFFFFDD",
                  borderRadius: 2137,
                  borderColor: PRIMARY_MARKER_COLOR,
                  borderWidth: 2,
                  opacity: isVisited(route?.route_points[index]) ? 0.5 : 1,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: isVisitedOrNext(route?.route_points[index], index)
                      ? "white"
                      : PRIMARY_MARKER_COLOR,
                  }}
                >
                  {index + 1}
                </Text>
              </View>
            </Marker>
          ))}
          {route?.route_points?.length ? (
            <MapRoute
              initLocation={location}
              coordinates={coordinates}
              imageURL={route.hero.image}
            />
          ) : null}
        </MapView>
      </MapWrapper>
      {allPointsVisited && (
        <ConfettiCannon count={200} origin={{ x: 0, y: 5000 }} />
      )}
    </View>
  );
};

export default Maps;
