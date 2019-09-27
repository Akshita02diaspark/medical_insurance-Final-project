import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'user',
    loadChildren: './user/user/user.module#UserModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'agent',
    loadChildren: './agent/agent.module#AgentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
