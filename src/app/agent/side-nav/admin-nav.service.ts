import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminNavService {

  // tslint:disable-next-line:variable-name
  private _isSideNavOpen = new BehaviorSubject<boolean>(false);

  get isSideNavOpen() {
    return this._isSideNavOpen.asObservable();
  }

  constructor() { }

  openNav() {
    // document.getElementById('mySidenav').style.width = '250px';
    this._isSideNavOpen.next(true);
  }

  closeNav() {
    // document.getElementById('mySidenav').style.width = '0';
    this._isSideNavOpen.next(false);
  }
}
