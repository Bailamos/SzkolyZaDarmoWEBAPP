import { Injectable } from '@angular/core';

import {Service} from "./service";
import {Training} from "../models/training.model";

@Injectable()
export class TrainingsService extends Service{

  public getTrainings(queryParams) {
    return this.http.get(this.API_URL + '/trainings'  + "?" + this.toQueryString(queryParams));
  }

  getTraining(id: number) {
    return this.http.get<Training>(this.API_URL + '/trainings/' + id, {observe: 'response'});
  }

}
