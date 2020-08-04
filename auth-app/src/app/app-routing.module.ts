import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AdminComponent } from './admin/admin.component'

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  } , {
    path: 'login',
    component: LoginComponent
  } , {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
