import {User} from "../model/user";

export interface IUserRepository {
  getAll(): Promise<User[]>;
  getMe(): Promise<User>;
  create(username: string): Promise<User>;
  getFollows(userId: string | null): Promise<User[]>;
  getFollowers(userId: string | null): Promise<User[]>;
}