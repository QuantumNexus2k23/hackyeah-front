import { AxiosHeaders } from "axios";
import { client } from "./client";
import {
  CredentialsData,
  RegisterData,
  TokensData,
} from "../stores/auth/types";

class API {
  login(data: CredentialsData): Promise<TokensData> {
    return this.request({
      url: "/accounts/jwt/create/",
      method: "POST",
      data,
    });
  }

  async register(data: CredentialsData): Promise<TokensData> {
    await this.request({
      url: "/accounts/users/",
      method: "POST",
      data,
    });

    return this.request({
      url: "/accounts/jwt/create/",
      method: "POST",
      data,
    });
  }

  request<T>({
    url,
    method,
    headers,
    data,
  }: {
    url: string;
    method: "GET" | "POST";
    headers?: AxiosHeaders;
    data?: any;
  }): Promise<T> {
    return client.request({
      url,
      method,
      headers,
      data,
    });
  }
}

export default new API();
