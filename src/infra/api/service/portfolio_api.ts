import {IPortfolioRepository} from "../../../domain/repository/portfolio_repository";
import {IApiClient} from "../client";
import {Portfolio} from "../../../domain/model/portfolio";
import getToken from "./bind_token";
import {common, user} from "../rpc/api";
import Empty = common.Empty;
import {BufferWriter, Writer} from "protobufjs";
import PortfolioResponse = user.PortfolioResponse;
import PortfolioListResponse = user.PortfolioListResponse;
import UserID = common.UserID;

class PortfolioAPI implements IPortfolioRepository {

  constructor(readonly client: IApiClient) {

  }

  public getAll = (userId: string | null): Promise<Portfolio[]> => {
    if (userId) {
      return new Promise<Portfolio[]>((resolve, reject) => {
        getToken()
          .then((token: string): Promise<Uint8Array> => {
            const req: UserID = new UserID();
            req.userId = userId;
            const writer: BufferWriter | Writer = Writer.create();
            return this.client.postWithToken("/user.UserService/GetPortfolios", token, UserID.encode(req, writer).finish());
          })
          .then((binary: Uint8Array): void => {
            const res: PortfolioListResponse = PortfolioListResponse.decode(binary);
            const items: Portfolio[] = res.items.map((item: PortfolioResponse): Portfolio => {
              return Portfolio.from(item);
            }).filter((item: Portfolio): boolean => {
              return item.amount > 0.0;
            });
            resolve(items);
          })
          .catch((error: Error): void => {
            reject(error);
          });
      });
    } else {
      return new Promise<Portfolio[]>((resolve, reject) => {
        getToken()
          .then((token: string): Promise<Uint8Array> => {
            const req: Empty = new Empty();
            const writer: BufferWriter | Writer = Writer.create();
            return this.client.postWithToken("/user.MeService/GetPortfolios", token, Empty.encode(req, writer).finish());
          })
          .then((binary: Uint8Array): void => {
            const res: PortfolioListResponse = PortfolioListResponse.decode(binary);
            const items: Portfolio[] = res.items.map((item: PortfolioResponse): Portfolio => {
              return Portfolio.from(item);
            }).filter((item: Portfolio): boolean => {
              return item.amount > 0.0;
            });
            resolve(items);
          })
          .catch((error: Error): void => {
            reject(error);
          });
      });
    }
  }
}

const createPortfolioAPI = (client: IApiClient): IPortfolioRepository => {
  return new PortfolioAPI(client);
};

export { createPortfolioAPI };