import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { HeaderComponent } from './header/header.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserGuard } from '../user/user.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: TeamMemberComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'user-login', component: UserLoginComponent },
      { path: 'agent-login', component: AgentLoginComponent},
      { path: 'email-verify', component: EmailVerifyComponent},
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'confirm-password', component: ConfirmPasswordComponent},
      {}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
