import {Currency} from "../model/currency";
import {IApiClient} from "../../infra/api/client";

export interface ICurrencyRepository {
  getAll(): Promise<Currency[]>;
}