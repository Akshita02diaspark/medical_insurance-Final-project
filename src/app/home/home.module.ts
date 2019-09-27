import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgentLoginComponent } from './agent-login/agent-login.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';


@NgModule({
  declarations: [HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserLoginComponent,
    AdminLoginComponent,
    HeaderComponent,
    FooterComponent,
    AgentLoginComponent,
    TeamMemberComponent,
    EmailVerifyComponent,
    ConfirmPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
