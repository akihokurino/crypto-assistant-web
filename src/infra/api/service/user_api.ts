import {IUserRepository} from "../../../domain/repository/user_repository";
import {IApiClient} from "../client";
import {User} from "../../../domain/model/user";
import {common, user} from "../rpc/api";
import CreateUserRequest = user.CreateUserRequest;
import {BufferWriter, Writer} from "protobufjs";
import UserResponse = user.UserResponse;
import Empty = common.Empty;
import getToken from "./bind_token";

class UserAPI implements IUserRepository {

  constructor(readonly client: IApiClient) {

  }

  public getMe(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      getToken()
        .then((token: string): Promise<Uint8Array> => {
          const req: Empty = new Empty();
          const writer: BufferWriter | Writer = Writer.create();
          return this.client.postWithToken("/user.MeService/Get", token, Empty.encode(req, writer).finish());
        })
        .then((binary: Uint8Array): void => {
          const res: UserResponse = UserResponse.decode(binary);
          resolve(User.from(res));
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }

  public create(username: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      getToken()
        .then((token: string): Promise<Uint8Array> => {
          const req: CreateUserRequest = new CreateUserRequest();
          req.username = username;
          const writer: BufferWriter | Writer = Writer.create();
          return this.client.postWithToken("/user.MeService/Create", token, CreateUserRequest.encode(req, writer).finish());
        })
        .then((binary: Uint8Array): void => {
          const res: UserResponse = UserResponse.decode(binary);
          resolve(User.from(res));
        })
        .catch((error: Error): void => {
          reject(error);
        });
    });
  }
}

const createUserAPI = (client: IApiClient): IUserRepository => {
  return new UserAPI(client);
};

export { createUserAPI };