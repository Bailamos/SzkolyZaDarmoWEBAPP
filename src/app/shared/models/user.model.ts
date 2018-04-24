import {MarketStatus} from "./market-status.model";
import {Category} from "./category.model";
import {Voivodeship} from "./domain-shared/voivodeship.model";

export class User {
  constructor(
    public phoneNumber: string,
    public name: string,
    public surname: string,
    public lastUpdate: Date,
    public birthDay: Date,
    public marketStatus: MarketStatus,
    public areaOfResidence: {Id: number, AreaType: string },
    public education: {Id: number, EducationType: string },
    public sex: {Id: number, Name: string },
    public voivodeship: Voivodeship,
    public notes: [{description: string}],
    public entries: [{
      insertDate: Date,
      didParticipated: boolean,
      training: {
        id: number,
        title: string
        category: Category,
        marketStatus: MarketStatus
      },
    }],
    public email: string){}
}
