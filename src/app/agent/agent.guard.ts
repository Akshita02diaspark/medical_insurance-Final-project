import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from '../home/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgentGuard implements CanActivate {
 
  constructor( private _authService: AuthService, private router : Router){

  }

  canActivate(): boolean{
    if(this._authService.agentLoggedIn()){
      return true;
    } else{
      this.router.navigate(['home/agent-login']);
      return false;
    }
  }
  
}