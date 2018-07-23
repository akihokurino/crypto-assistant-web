import {User} from "../../domain/model/user";

export type FollowsState = {
  users: User[] | null,
};
