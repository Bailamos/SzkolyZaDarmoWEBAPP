import {Service} from "./service";
import {Injectable} from "@angular/core";
import {TrainingParameters} from "../models/domain-training/trainining-parameters.model";
import {UserParameters} from "../models/domain-user/user-parameters.model";


@Injectable()
export class ResourcesService extends Service {

  public getTrainingParameters() {
    return this.http.get<TrainingParameters>(this.API_URL + "/resources/trainings");
  }

  public getUserParameters() {
    return this.http.get<UserParameters>(this.API_URL + "/resources/users");
  }

  public getVoivodeships() {
    return this.http.get(this.API_URL + "/resources/voivodeships");
  }

  public getVoivodeshipCounties(id: number) {
    return this.http.get(this.API_URL + "/resources/voivodeships/" + id + "/counties");
  }
}
