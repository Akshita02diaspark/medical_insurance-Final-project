import { Component, OnInit } from '@angular/core';
import { UserNavService } from '../user-nav-bar/user-nav.service';
@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {

  isOpen: boolean;

  constructor(private adminService: UserNavService) {
    this.adminService.isSideNavOpen.subscribe(
      (isSideNavOpen: boolean) => {
        return this.isOpen = isSideNavOpen;
      }
    );
  }

  ngOnInit() {
  }

  closeNav() {
    this.adminService.closeNav();
  }
  openNav() {
    this.adminService.openNav();
  }
}
