export type TokensData = {
  access: string;
  refresh: string;
};

export type AuthStore = {
  access: string | null;
  refresh: string | null;
  email: string | null;
  loading: boolean;
  login: (credentials: CredentialsData) => Promise<void>;
  register: (credentials: CredentialsData) => Promise<void>;
  refreshToken: (token: string) => Promise<void>;
  verifyToken: (token: string) => Promise<void>;
};

export type CredentialsData = {
  email: string;
  password: string;
};

export type RegisterData = CredentialsData & {
  re_password: string;
};
