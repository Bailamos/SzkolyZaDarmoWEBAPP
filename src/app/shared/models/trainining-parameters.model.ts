import {MarketStatus} from "./market-status.model";
import {Category} from "./category.model";
import {Voivodeship} from "./voivodeship.model";

export class TrainingParameters {
  public constructor(
    public marketStatuses: MarketStatus[],
    public categories: Category[],
    public voivodeships: Voivodeship[]
  ){}
}
