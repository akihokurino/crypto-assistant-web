import {User} from "../model/user";

export interface IUserRepository {
  getMe(): Promise<User>;
  create(username: string): Promise<User>;
}