import { AxiosHeaders, AxiosResponse } from "axios";
import { client } from "./client";
import { BackendCredentialsData, TokensData } from "../stores/auth/types";
import {
  CitiesType,
  Hero,
  MapPoint,
  MapRoute,
  TrackType,
} from "../stores/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

class API {
  async login(payload: BackendCredentialsData): Promise<TokensData> {
    const { data } = await this.request<TokensData>({
      url: "/accounts/jwt/create/",
      method: "POST",
      payload,
    });

    return data;
  }

  async register(payload: BackendCredentialsData): Promise<void> {
    await this.request({
      url: "/accounts/users/",
      method: "POST",
      payload,
    });
  }

  async refreshToken(refresh: string): Promise<{ access: string }> {
    const { data } = await this.request<TokensData>({
      url: "/accounts/jwt/refresh/",
      method: "POST",
      payload: { refresh },
    });

    return data;
  }

  async verifyToken(token: string): Promise<void> {
    await this.request<void>({
      url: "/accounts/jwt/verify/",
      method: "POST",
      payload: { token },
    });
  }

  async getCities(): Promise<Array<CitiesType>> {
    const { data } = await this.request<Array<CitiesType>>({
      url: `/cities/`,
      method: "GET",
    });

    return data;
  }

  async getRoutes(): Promise<Array<MapRoute>> {
    const { data } = await this.request<Array<MapRoute>>({
      url: `/routes/`,
      method: "GET",
    });

    return data;
  }

  async getCityRoutes(id: string): Promise<TrackType[]> {
    const { data } = await this.request<TrackType[]>({
      url: `/routes/?city_id=${id}`,
      method: "GET",
    });

    return data;
  }

  async getMapData(id: string): Promise<MapRoute> {
    const { data } = await this.request<MapRoute>({
      url: `/routes/${id}/`,
      method: "GET",
    });

    return data;
  }

  async getMapPoint(id: string): Promise<MapPoint> {
    const { data } = await this.request<MapPoint>({
      url: `/route-points/${id}/`,
      method: "GET",
    });

    return data;
  }

  async visitPoint(routeId: number, id: number): Promise<void> {
    await this.request<void>({
      url: `/routes/${routeId}/visit/`,
      method: "POST",
      payload: { point: id },
    });
  }

  async getHeroes(): Promise<Array<Hero>> {
    const { data } = await this.request<Array<Hero>>({
      url: `/heroes`,
      method: "GET",
    });

    return data;
  }

  async getHeroById(id: number): Promise<Hero> {
    const { data } = await this.request<Hero>({
      url: `/heroes/${id}`,
      method: "GET",
    });

    return data;
  }

  async request<T>({
    url,
    method,
    headers,
    payload,
  }: {
    url: string;
    method: "GET" | "POST";
    headers?: AxiosHeaders;
    payload?: any;
  }): Promise<AxiosResponse<T>> {
    const accessToken = await AsyncStorage.getItem("access");

    return client.request({
      url,
      method,
      headers: {
        ...(accessToken
          ? {
              Authorization: `Bearer ${accessToken}`,
            }
          : {}),
        ...headers,
      },
      data: payload,
    });
  }
}

export default new API();
