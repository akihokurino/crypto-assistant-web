import {Portfolio} from "../model/portfolio";

export interface IPortfolioRepository {
  getMine(): Promise<Portfolio[]>;
}