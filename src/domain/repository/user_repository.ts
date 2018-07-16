import {User} from "../model/user";

export interface IUserRepository {
  getMe(token: string): Promise<User>;
  create(token: string, username: string): Promise<User>;
}