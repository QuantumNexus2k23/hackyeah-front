import { AxiosHeaders, AxiosResponse } from "axios";
import { client } from "./client";
import {
  CredentialsData,
  RegisterData,
  TokensData,
} from "../stores/auth/types";
import { MapRoute } from "../stores/types";

class API {
  async login(payload: CredentialsData): Promise<TokensData> {
    const { data } = await this.request<TokensData>({
      url: "/accounts/jwt/create/",
      method: "POST",
      payload,
    });

    return data;
  }

  async register(payload: CredentialsData): Promise<TokensData> {
    await this.request({
      url: "/accounts/users/",
      method: "POST",
      payload,
    });

    const { data } = await this.request<TokensData>({
      url: "/accounts/jwt/create/",
      method: "POST",
      payload,
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

  async getMapData(id: string): Promise<MapRoute> {
    const { data } = await this.request<MapRoute>({
      url: `/routes/${id}`,
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
