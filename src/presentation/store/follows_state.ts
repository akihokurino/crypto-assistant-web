import {User} from "../../domain/model/user";

export type FollowersState = {
  users: User[] | null,
};