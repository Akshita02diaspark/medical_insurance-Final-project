import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

_urlupdate = 'http://backend.us-east-2.elasticbeanstalk.com/users/registerNewPassword'

  constructor(private http:HttpClient) { }


  updatePassword(email : string, body :any ) {
    console.log("email ",email)
    
    return this.http.put(this._urlupdate +'/'+ email ,body);
  }
}
