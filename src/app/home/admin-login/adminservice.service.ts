import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import {adminLogin} from './admin';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  // tslint:disable-next-line:variable-name
  _url = 'http://localhost:3000/Adminlogin';
  constructor(private http: HttpClient) {

  }
  // tslint:disable-next-line:typedef-whitespace
  login(admin: adminLogin) {
    return this.http.post<any>(this._url, admin);
  }
}
