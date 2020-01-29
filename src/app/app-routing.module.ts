import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegisterComponent } from './players/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EmailComponent } from './admin/email/email.component';

const routes: Routes = [
  { path: 'player', component: RegisterComponent, canActivate: [AuthGuardService]},
  { path: 'admin' , component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'emails' , component: EmailComponent, canActivate: [AuthGuardService]},
  { path: 'login' , component: LoginComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
