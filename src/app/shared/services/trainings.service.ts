import { Injectable } from '@angular/core';

import {Service} from "./service";
import {Training} from "../models/training.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TrainingsService extends Service{

  public onTrainingDelete = new Subject<number>();

  public getTrainings(queryParams) {
    return this.http.get(this.API_URL + '/trainings'  + "?" + this.toQueryString(queryParams));
  }

  public getTraining(id: number) {
    return this.http.get<Training>(this.API_URL + '/trainings/' + id, {observe: 'response'});
  }

  public createTraining(training) {
    return this.http.post(this.API_URL + '/trainings', training);
  }

  public deleteTraining(id: number) {
    return this.http.delete<number>(this.API_URL + '/trainings/' + id, {observe: 'response'});
  }

  public updateTraining(id, training) {
    return this.http.put(this.API_URL + '/trainings/' + id , training);
  }

}
