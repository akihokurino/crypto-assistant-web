import {User} from "../../domain/model/user";

export type AppState = {
  user: User | null,
  authState: AuthState,
};

export enum AuthState {
  UNKNOWN = "UNKNOWN",
  GUEST = "GUEST",
  LOGIN_USER = "LOGIN_USER",
}