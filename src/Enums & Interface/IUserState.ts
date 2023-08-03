import {
  AppState,
  LogoutOptions,
  RedirectLoginOptions,
} from "@auth0/auth0-react";

export interface IUserState {
  logout: (options?: LogoutOptions | undefined | any) => Promise<void>;
  // logout: any;
  isAuthenticated?: boolean;
  loginWithRedirect: (
    options?: RedirectLoginOptions<AppState> | undefined | any
  ) => Promise<void>;
  // loginWithRedirect: any;
  myUser: ImyUser | boolean;
  isLoading?: boolean;
}

export interface ImyUser {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
}
