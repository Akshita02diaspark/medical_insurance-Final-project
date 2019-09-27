import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {
  }
  submitLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('agentName');
    localStorage.removeItem('ID');
    localStorage.removeItem('username');
    this.routes.navigate(['home/agent-login']);
  }

}
