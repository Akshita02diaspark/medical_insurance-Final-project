import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from '../home/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentTokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) { }

  intercept(req, next){
    if(!!localStorage.getItem('token')){
      let authService = this.injector.get(AuthService);
      let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getToken()}` 
      }
    })
    return next.handle( tokenizedReq )
  }else{
    if(!!localStorage.getItem('UserToken')){
      let authService = this.injector.get(AuthService);
      let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getUserToken()}` 
      }
    })
    return next.handle( tokenizedReq )
    }else{
      let authService = this.injector.get(AuthService);
      let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService.getAdminToken()}` 
      }
    })
    return next.handle( tokenizedReq )
    }
  }
  }
}