import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  myData: {};
  status = { "status": "Approved" }

  condition = false;
 

  constructor(private _adminService: AdminServiceService) { }

  ngOnInit() {


    this._adminService.get_Users()

      .subscribe(
        res => {
          console.log(this.myData);
          this.myData = res
        },
        // error => console.error(error)
      );
  }

  refreshUsersList() {
    this._adminService.get_Users().subscribe((res) => {
      this.myData = res;

    }


    )

  }

  delete(_id: string) {
    this._adminService.delete_row(_id)
      .subscribe(
        data => {
          // console.log(_id)
          Array.prototype.slice.call(data, 1);
          
          this.refreshUsersList();

        },
        // error => console.error(error)
      );

  }
  clicked = false;

  actionMethod() {
    this.clicked = true;
    // console.log("actionMethod was called!");
  }

  accept(_id: string) {
    this._adminService.accept_user(_id, this.status)
      .subscribe(
        data => {
          this.condition= true;
          // console.log(data);
          // debugger; 
          // Array.prototype.slice.call(data, 2);
          this.refreshUsersList();
         this.actionMethod() ;
          // console.log(this.status)

        },
        error => {
          // console.error(error)
        }
      )

  }






}
