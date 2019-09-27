import { Component, OnInit } from '@angular/core';
import { AgentserviceService } from '../agentservice.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  myData: {};
  constructor(private _agentService: AgentserviceService) { }

  ngOnInit() {


    this._agentService.get_Users()
      .subscribe(
        res => this.myData = res,
        // error => console.error(error)
      );
  }

  refreshUsersList() {
    this._agentService.get_Users().subscribe((res) => {
      this.myData = res;

    }


    )

  }

  delete(_id: string) {
    this._agentService.delete_row(_id)
      .subscribe(
        data => {
          console.log(_id)
          Array.prototype.slice.call(data, 1);
          this.refreshUsersList();
        },
        // error => console.error(error)
      );

  }





}
