import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { AdminComponent } from './admin/admin.component'
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  } , {
    path: 'logout',
    component: LogoutComponent
  } , {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  } , {
    path: 'register',
    component: RegisterComponent
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
