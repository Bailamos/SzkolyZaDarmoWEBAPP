import { Injectable } from '@angular/core';

import {Service} from "./service";

@Injectable()
export class TrainingsService extends Service{

  public getTrainings(queryParams) {
    return this.http.get(this.API_URL + '/trainings'  + "?" + this.toQueryString(queryParams));
  }

}
