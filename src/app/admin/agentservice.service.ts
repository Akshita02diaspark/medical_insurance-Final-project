import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {
  _url = 'http://backend.us-east-2.elasticbeanstalk.com/users/save';

  _urlgetall = 'http://backend.us-east-2.elasticbeanstalk.com/users'
  _urlView = 'http://backend.us-east-2.elasticbeanstalk.com/users/show'

  getAgent = `http://backend.us-east-2.elasticbeanstalk.com/agent/viewAgent`

  constructor(private http: HttpClient) { }

 

  get_Users() {
    return this.http.get(this._urlgetall);
  }

  getAgentDetail(){
    return this.http.get<any>(this.getAgent);
  }
  view_User(_id : string){

    return this.http.get(this._urlView + `/${_id}`);
    
    }

}