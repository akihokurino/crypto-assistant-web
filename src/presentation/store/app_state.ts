import {User} from "../../domain/model/user";

export type AppState = {
  user: User | null,
  authState: AuthStateType,
};

export enum AuthStateType {
  UNKNOWN = "UNKNOWN",
  GUEST = "GUEST",
  LOGIN_USER = "LOGIN_USER",
}