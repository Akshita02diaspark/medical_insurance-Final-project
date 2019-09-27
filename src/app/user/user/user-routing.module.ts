import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PolicyComponent } from './policy/policy.component';
import { ApplyForClaimsComponent } from './apply-for-claims/apply-for-claims.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UserGuard } from '../user.guard';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: UserComponent,
    children : [
      {
        path : '' , redirectTo: 'home' , pathMatch : 'full'
      },
      {
        path: 'home' , component : UserHomeComponent
      },
      {
        path : 'dashboard', component : UserDashboardComponent, canActivate: [UserGuard]
      },
      {
        path: 'user-profile', component: UserProfileComponent, canActivate: [UserGuard]
      },
      {
        path: 'policy', component: PolicyComponent, canActivate: [UserGuard]
      },
      {
        path: 'apply-for-claims', component: ApplyForClaimsComponent, canActivate: [UserGuard]
      },
      {
        path: 'updatePassword', component: UpdatePasswordComponent, canActivate: [UserGuard]
      },
      {
        path: 'user-update', component: UpdateUserProfileComponent, canActivate: [UserGuard]
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
