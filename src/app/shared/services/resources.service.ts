import {Service} from "./service";
import {Injectable} from "@angular/core";
import {TrainingParameters} from "../models/domain-training/trainining-parameters.model";
import {UserParameters} from "../models/domain-user/user-parameters.model";


@Injectable()
export class ResourcesService extends Service {

  private userParameters: UserParameters = null;

  public getTrainingParameters() {
    return this.http.get<TrainingParameters>(this.API_URL + "/resources/trainings");
  }

  public getUserParameters() {
    return new Promise(
      (resolve, reject) => {
        if (this.userParameters != null) {
          resolve(this.userParameters);
        } else {
          this.http.get<UserParameters>(this.API_URL + "/resources/users").subscribe(
            (res) => {
              this.userParameters = res;
              resolve(this.userParameters);
            },
            (err) => {
              reject(err);
            }
          )
        }
      }
    )
}

  public getVoivodeships() {
    return this.http.get(this.API_URL + "/resources/voivodeships");
  }

  public getVoivodeshipCounties(id: number) {
    return this.http.get(this.API_URL + "/resources/voivodeships/" + id + "/counties");
  }
}
