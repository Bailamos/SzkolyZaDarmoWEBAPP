

import {MarketStatus} from "../market-status.model";
import {Education} from "./education.model";
import {Sex} from "./sex.model";
import {AreaOfResidence} from "./area-of-residence.model";

export class UserParameters {
  public constructor(
      public marketStatuses: MarketStatus[],
      public educations: Education[],
      public sexes: Sex[],
      public areasOfResidence: AreaOfResidence[]
    ){}
}
