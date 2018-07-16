import {User} from "../../domain/model/user";

export type AppState = {
  user: User | null,
};