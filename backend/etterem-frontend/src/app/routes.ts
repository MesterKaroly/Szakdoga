import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

export const appRoutes: Routes = [{
  path:'',
  children:[
    {path: '', redirectTo: 'help', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent}

  ]
}];
