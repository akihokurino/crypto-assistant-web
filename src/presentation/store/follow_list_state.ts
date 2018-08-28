import {User} from "../../domain/model/user";

export type FollowListState = {
  users: User[] | null,
};