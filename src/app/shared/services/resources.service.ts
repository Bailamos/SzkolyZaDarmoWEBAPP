import {Service} from "./service";
import {Injectable} from "@angular/core";
import {TrainingParameters} from "../models/trainining-parameters.model";


@Injectable()
export class ResourcesService extends Service {

  public getTrainingParameters() {
    return this.http.get<TrainingParameters>(this.API_URL + "/resources/trainings");
  }
}
