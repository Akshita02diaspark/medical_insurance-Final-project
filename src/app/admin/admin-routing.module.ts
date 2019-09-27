import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUserComponent } from '../admin/view-user/view-user.component';
import { AdminGuard } from './admin.guard';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ApprovedPolicyComponent } from './approved-policy/approved-policy.component';
import { AgentRegistrationComponent } from './agent-registration/agent-registration.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      // {
      // path : '' , redirectTo: 'dashboard' , pathMatch : 'full'
      // },
      { path: 'dashboard' , component: DashboardComponent, canActivate: [AdminGuard] },
      { path: 'profile' , component: ProfileComponent, canActivate: [AdminGuard] },
      { path: 'customer-list' , component: CustomerListComponent, canActivate: [AdminGuard] },
      { path: 'customer-list/view-user/:id' , component: ViewUserComponent, canActivate: [AdminGuard] },
      { path: 'view-agent', component: ViewAgentComponent,canActivate: [AdminGuard]},
      { path: 'approved-policy', component: ApprovedPolicyComponent, canActivate: [AdminGuard]},
      { path: 'agent-registration', component: AgentRegistrationComponent, canActivate: [AdminGuard]}

   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
