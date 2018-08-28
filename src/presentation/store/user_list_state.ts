import {User} from "../../domain/model/user";

export type UserListState = {
  users: User[] | null,
};