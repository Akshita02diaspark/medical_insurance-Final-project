import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { AgentComponent } from './agent.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AgentGuard } from './agent.guard';
import { AppliersComponent } from './appliers/appliers.component';


const routes: Routes = [

  {
    path: '', component: AgentComponent,
    children: [
      // {
      // path : '' , redirectTo: 'dashboard' , pathMatch : 'full'
      // },
      // { path: 'dashboard' , component: DashboardComponent, canActivate: [AgentGuard] },
      { path: 'profile' , component: ProfileComponent, canActivate: [AgentGuard] },
      { path: 'customer-list' , component: CustomerListComponent, canActivate: [AgentGuard]  },
      { path: 'customer-registration' , component: CustomerRegistrationComponent, canActivate: [AgentGuard]  },
      { path: 'customer-list/viewUser/:id' , component: ViewUserComponent, canActivate: [AgentGuard]  },
      { path: 'appliers' , component: AppliersComponent, canActivate: [AgentGuard]  }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
