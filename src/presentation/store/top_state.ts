import {Currency} from "../../domain/model/currency";
import {Portfolio} from "../../domain/model/portfolio";

export type TopState = {
  currencies: Currency[],
  portfolios: Portfolio[] | null,
};