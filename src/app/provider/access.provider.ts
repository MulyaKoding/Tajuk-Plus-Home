import { HttpClient, HttpHeader } from "@angular/common/http";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable({providedIn:'root'})
export class AccessProvider{
  server: string = 'http://localhost/ionic-api-test/';
  constructor(
    public http: HttpClient
  ){}

    postData(body, file) {
      let header= new HttpHeader({
        'Content-Type': 'application/json; charset=UTF-8'
      });
      let options = {
          header: header
      }

      return this.http.post(this.server + file, JSON.stringify(body), options).timeout(59000).map(res=>res);
    }

}
