import { AxiosHeaders, AxiosResponse } from "axios";
import { client } from "./client";
import { CredentialsData, TokensData } from "../stores/auth/types";
import { CitiesType, MapPoint, MapRoute, TrackType } from "../stores/types";

class API {
  async login(payload: CredentialsData): Promise<TokensData> {
    const { data } = await this.request<TokensData>({
      url: "/accounts/jwt/create/",
      method: "POST",
      payload,
    });

    return data;
  }

  async register(payload: CredentialsData): Promise<void> {
    await this.request({
      url: "/accounts/users/",
      method: "POST",
      payload,
    });
  }

  async refreshToken(refresh: string): Promise<TokensData> {
    const { data } = await this.request<TokensData>({
      url: "accounts/jwt/refresh/",
      method: "POST",
      payload: { refresh },
    });

    return data;
  }

  async verifyToken(token: string): Promise<void> {
    await this.request<void>({
      url: "accounts/jwt/refresh/",
      method: "POST",
      payload: { token },
    });
  }

  async getCities(): Promise<Array<CitiesType>> {
    const { data } = await this.request<Array<CitiesType>>({
      url: `/cities`,
      method: "GET",
    });

    return data;
  }

  async getRoutes(): Promise<Array<MapRoute>> {
    const { data } = await this.request<Array<MapRoute>>({
      url: `/routes`,
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
      url: `/routes/${id}`,
      method: "GET",
    });

    return data;
  }

  async getMapPoint(id: string): Promise<MapPoint> {
    const { data } = await this.request<MapPoint>({
      url: `/route-points/${id}`,
      method: "GET",
    });

    return data;
  }

  request<T>({
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
    return client.request({
      url,
      method,
      headers,
      data: payload,
    });
  }
}

export default new API();
