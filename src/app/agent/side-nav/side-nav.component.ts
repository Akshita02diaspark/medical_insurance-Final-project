import { Component, OnInit } from '@angular/core';
import {AdminNavService} from '../side-nav/admin-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  isOpen: boolean;

  constructor(private adminService: AdminNavService) {
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
