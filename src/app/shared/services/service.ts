import {environment} from '../../../environments/environment';

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export class Service {
  protected API_URL = environment.apiUrl;

  constructor(@Injectable() protected http: HttpClient) {
  }

  toQueryString(obj) {
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined)
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }
    return parts.join('&');
  }
}
