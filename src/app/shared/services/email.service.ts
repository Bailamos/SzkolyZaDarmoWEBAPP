import { Injectable } from '@angular/core';
import {Service} from "./service";
import {Subject} from "rxjs/Subject";


@Injectable()
export class EmailService extends Service {
  public receiversChanged = new Subject<string[]>();

  private receivers: string[] = [];
  public sendMail(sendMessageResource) {
    return this.http.post(this.API_URL + '/message', sendMessageResource);
  }

  public setReceivers(receivers: string[]) {
    this.receivers = receivers;
    this.receiversChanged.next(this.receivers)
  }

  public getReceivers() {
    return this.receivers;
  }
}
