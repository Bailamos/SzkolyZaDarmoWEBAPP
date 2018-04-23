import { Injectable } from '@angular/core';
import {Service} from "./service";

@Injectable()
export class UsersService extends Service{

  public registerUser(userBody) {
    return this.http.post(this.API_URL + '/users', userBody);
  }

  public getUsers(queryParams) {
    return this.http.get(this.API_URL + '/users' + "?" + this.toQueryString(queryParams));
  }

  public getEmails(queryParams) {
    return this.http.get(this.API_URL + '/users/emails' + "?" + this.toQueryString(queryParams));
  }

  public getOne(phoneNumber: string) {
    return this.http.get(this.API_URL + '/users/' + phoneNumber);
  }

  public getComments(phoneNumber: string) {
    return this.http.get(this.API_URL + '/users/' + phoneNumber + '/comments');
  }

  public addComment(saveCommentResource) {
    return this.http.post(this.API_URL + '/users/' + saveCommentResource.userPhoneNumber + '/comments',saveCommentResource);
  }

  public getLogs(phoneNumber: string) {
    return this.http.get(this.API_URL + '/users/' + phoneNumber + "/logs");
  }
}
