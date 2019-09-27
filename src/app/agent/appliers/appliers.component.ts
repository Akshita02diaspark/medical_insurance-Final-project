import { Component, OnInit } from '@angular/core';
import{AgentserviceService} from '../agentservice.service'

@Component({
  selector: 'app-appliers',
  templateUrl: './appliers.component.html',
  styleUrls: ['./appliers.component.css']
})
export class AppliersComponent implements OnInit {
myData: any = {};
  constructor(private _agentService: AgentserviceService) { }

  ngOnInit() {

    this._agentService.get_Contact()
    .subscribe(
      
      res => {this.myData = res
      },
      // error => console.error(error)
        );
  }

  refreshUsersList() {
    this._agentService.get_Contact().subscribe((res) => {
      this.myData = res;
    });
  }

  deleteApplier(_id: string) {
    this._agentService.delete_applier(_id)
      .subscribe(
        data => {
          Array.prototype.slice.call(data, 1);
          this.refreshUsersList();
        },
        // error => console.error("errorbv,jv" , error)
      );

  }
}
