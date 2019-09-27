import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { register } from './customer-registration/register';
// import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {
  // tslint:disable-next-line:variable-name
  _url = 'http://backend.us-east-2.elasticbeanstalk.com/users/createNew';

  _urlgetall = 'http://backend.us-east-2.elasticbeanstalk.com/users'

_urlDeleteRow = ' http://backend.us-east-2.elasticbeanstalk.com/users/delete'

_urlView = 'http://backend.us-east-2.elasticbeanstalk.com/users/show'

_urlcontactus = 'http://backend.us-east-2.elasticbeanstalk.com/contactus/'

 _urlDeleteApplier = 'http://backend.us-east-2.elasticbeanstalk.com/contactus/delete'

  constructor(private http: HttpClient) { }

  registeration(reg: register) {
    return this.http.post<any>(this._url, reg);
  }

  get_Users() {
    return this.http.get(this._urlgetall);
  }


  delete_row(_id : string){
    return this.http.delete(this._urlDeleteRow + `/${_id}`);
  }

  view_User(_id : string){

    return this.http.get(this._urlView + `/${_id}`);
    
    }

    get_Contact(){
      return this.http.get(this._urlcontactus);
    }


    delete_applier(_id : string){
      return this.http.delete(this._urlDeleteApplier + `/${_id}`);

    }


}