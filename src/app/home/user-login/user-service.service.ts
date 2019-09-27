import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import {UserLogin} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
// tslint:disable-next-line:variable-name
_url = 'http://localhost:8080/user/userLogin';
constructor(private http: HttpClient) {

}
// tslint:disable-next-line:typedef-whitespace
login(user: UserLogin) {
  return this.http.post<any>(this._url, user);
}
}
