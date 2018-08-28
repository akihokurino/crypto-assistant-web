import {User} from "../../domain/model/user";
import {AuthStateType} from "../auth_state_type";

export type LayoutState = {
  user: User | null,
  authState: AuthStateType,
};