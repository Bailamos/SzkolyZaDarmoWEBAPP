import {Tag} from "./tag.model";
import {Category} from "./category.model";
import {MarketStatus} from "./market-status.model";
import {Instructor} from "./instructor.model";
import {Localization} from "./localization.model";
import {Voivodeship} from "./domain-shared/voivodeship.model";


export class Training {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public lastUpdate: Date,
    public insertDate: Date,
    public registerSince: Date,
    public registerTo: Date,
    public tags: Tag[],
    public category: Category,
    public marketStatus: MarketStatus,
    public instructor: Instructor,
    public voivodeship: Voivodeship,
    public contactPhoneNumber: string,
    public contactEmail: string,
    public counties: {id: number, countyName: string}[],
    public marketStatuses: MarketStatus[],

  ){}

}
