import { Injectable } from '@angular/core';
import {Service} from "./service";

@Injectable()
export class UsersService extends Service{

  registerUser(userBody) {
    return this.http.post(this.API_URL + '/users', userBody);
  }

  // getUsers(queryParams) {
  //   return this.http.get(this.API_URL + '/users' + "?" + this.toQueryString(queryParams));
  // }
  //
  // getOne(phoneNumber: string) {
  //   return this.http.get(this.API_URL + '/users/' + phoneNumber);
  // }
  //
  // createLog(phoneNumber: string, log) {
  //   return this.http.post(this.API_URL + '/users/' + phoneNumber + "/logs", log);
  // }
  //
  // getLogs(phoneNumber: string) {
  //   return this.http.get(this.API_URL + '/users/' + phoneNumber + "/logs");
  // }
  //
  // getEmails(queryParams) {
  //   return this.http.get(this.API_URL + '/users/emails' + "?" + this.toQueryString(queryParams));
  // }

}
