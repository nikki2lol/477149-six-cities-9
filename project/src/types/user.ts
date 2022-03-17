export type UserData = {
  id: number;
  email: string;
  name: string;
  token: string;
  isPro: boolean;
  avatarUrl: string;
};

export type AuthData = {
  login: string;
  password: string;
};
