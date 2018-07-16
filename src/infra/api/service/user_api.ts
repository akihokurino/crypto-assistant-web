import {IUserRepository} from "../../../domain/repository/user_repository";
import {IApiClient} from "../client";
import {User} from "../../../domain/model/user";
import {common, user} from "../rpc/api";
import CreateUserRequest = user.CreateUserRequest;
import {Writer} from "protobufjs";
import UserResponse = user.UserResponse;
import Empty = common.Empty;

class UserAPI implements IUserRepository {

  constructor(readonly client: IApiClient) {

  }

  public getMe(token: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const req = new Empty();
      const writer = Writer.create();
      this.client.postWithToken("/user.MeService/GetMe", token, Empty.encode(req, writer).finish())
        .then((binary: Uint8Array) => {
          const res: UserResponse = UserResponse.decode(binary);
          resolve(User.from(res));
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }

  public create(token: string, username: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      const req = new CreateUserRequest();
      req.username = username;
      const writer = Writer.create();
      this.client.postWithToken("/user.MeService/Create", token, CreateUserRequest.encode(req, writer).finish())
        .then((binary: Uint8Array) => {
          const res: UserResponse = UserResponse.decode(binary);
          resolve(User.from(res));
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }
}

const createUserAPI = (client: IApiClient): IUserRepository => {
  return new UserAPI(client);
};

export { createUserAPI };