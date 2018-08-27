import {User} from "../../domain/model/user";
import {Portfolio} from "../../domain/model/portfolio";

export type UserState = {
  user: User | null,
  portfolios: Portfolio[],
};