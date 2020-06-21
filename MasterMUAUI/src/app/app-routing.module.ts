import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';


const routes: Routes = [
  { path:'',redirectTo: '/home' , pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  // { path:'registration', component: RegistrationComponent },
  // { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent},
  { path:'forbidden',component:ForbiddenComponent },
  //{ path:'adminpanel',component:AdminPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
  { path:'adminpanel',component:AdminPanelComponent},
  //{ path:'userpanel',component:UserPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Users']}},
  { path:'userpanel',component:UserPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
