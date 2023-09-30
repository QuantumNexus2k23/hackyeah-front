export type TokensData = {
  access: string;
  refresh: string;
};

export type AuthStore = {
  access: string | null;
  refresh: string | null;
  email: string | null;
  loading: boolean;
  setTokens: (tokens: TokensData) => void;
  setLoadingOff: () => void;
  setLoadingOn: () => void;
  setRefreshToken: (token: string) => void;
};

export type CredentialsData = {
  username: string;
  password: string;
};

export type RegisterData = CredentialsData & {
  re_password: string;
};
