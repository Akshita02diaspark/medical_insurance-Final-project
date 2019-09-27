import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {adminLogin} from './admin-login/admin';
import {UserLogin} from './user-login/user';
import {Contact} from './contact-us/contact';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _url1 = 'http://backend.us-east-2.elasticbeanstalk.com/agent/agentLogin';
  // tslint:disable-next-line:variable-name

  private adminLogin = 'http://backend.us-east-2.elasticbeanstalk.com/admin/adminLogin'
  _url2 = 'http://backend.us-east-2.elasticbeanstalk.com/api/v1/user/userLogin';

 // tslint:disable-next-line:variable-name
 _url3 = 'http://backend.us-east-2.elasticbeanstalk.com/contactus/create';

 _verifyEmailURL = 'http://backend.us-east-2.elasticbeanstalk.com/agent/forgotPassword';

 aproovedUser = 'http://backend.us-east-2.elasticbeanstalk.com/users/aproovedUsers';

 applyCLaim = 'http://backend.us-east-2.elasticbeanstalk.com/users/applyClaim';

 _agentRegisterURL = 'http://backend.us-east-2.elasticbeanstalk.com/agent/create';

 updateUserURL = "http://backend.us-east-2.elasticbeanstalk.com/users/update"


 
  constructor(private http: HttpClient) { }

  adminlogin(admin: adminLogin) {
    return this.http.post<any>(this.adminLogin, admin);
  }
  userlogin(user: UserLogin) {
    return this.http.post<any>(this._url2, user);
  }

  contactlogin(contact: Contact) {
    return this.http.post<any>(this._url3, contact);
  }

  agentlogin(agent){
    return this.http.post<any>(this._url1, agent);
  }

  registerAgent(agentRegister){
    return this.http.post(this._agentRegisterURL,agentRegister)
  }

  getAproovedUser(){
    return this.http.get(this.aproovedUser)
  }

  adminLoggedIn(){
    return !!localStorage.getItem('adminToken');
  }

  agentLoggedIn(){
    return !!localStorage.getItem('token');
  }

  userLoggedIn(){
    return !!localStorage.getItem('userToken');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  getUserToken(){
    return localStorage.getItem('userToken');
  }

  getAdminToken(){
    return localStorage.getItem('adminToken');
  }

  verifyEmail(email){
    return this.http.post<any>(this._verifyEmailURL, email)
  }

  applyClaim(id: string, claim:any){
    return this.http.post(this.applyCLaim + `/${id}`, claim)
  }

  updateProfile(id: string, updateUserProfile: string){
    return this.http.put<any>(this.updateUserURL+'/'+ id , updateUserProfile);
  }

  
}
