import {user} from "../../infra/api/rpc/api";
import UserResponse = user.UserResponse;

export class User {
  public static from(from: UserResponse): User {
    return new User(from.id, from.username, from.iconURL);
  }

  constructor(public readonly id: string,
              public readonly username: string,
              public readonly iconURL: string) {

  }
}