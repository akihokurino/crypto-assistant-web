import {Portfolio} from "../model/portfolio";

export interface IPortfolioRepository {
  getAll(userId: string | null): Promise<Portfolio[]>;
}