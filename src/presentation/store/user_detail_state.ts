import {User} from "../../domain/model/user";
import {Portfolio} from "../../domain/model/portfolio";

export type UserDetailState = {
  user: User | null,
  portfolios: Portfolio[],
};