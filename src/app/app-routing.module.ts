import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {DashboardComponent} from "./dashboard-page/dashboard.component";
import {ProfileComponent} from "./profile-page/profile.component";
import {Error404Component} from "./error404-page/error404.component";
import {AuthGuard} from "./auth.guard";
import {HomeComponent} from "./home-page/home.component";
import {Error401Component} from "./error401-page/error401.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard-page', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile-page', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '401', component: Error401Component},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
