import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ErrorComponent} from "./error/error.component";
import {CarteComponent} from "./carte/carte.component";
import {OrderComponent} from "./order/order.component";
import {OrdersComponent} from "./orders/orders.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {RatingComponent} from "./rating/rating.component";
import {RouteGuard} from "./route.guard";
import {Role} from "./entity/Role";

export const appRoutes: Routes = [{
  path:'',
  canActivateChild:[RouteGuard],
  children:[
    {path: '', redirectTo: 'rating', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'carte', component: CarteComponent,data:{roles:[Role.GUEST,Role.USER,Role.WAITER,Role.ADMIN]}},
    {path: 'order', component: OrderComponent,data: {roles:[Role.USER,Role.ADMIN,Role.WAITER]}},
    {path: 'orders', component: OrdersComponent, data:{roles: [Role.CHEF,Role.ADMIN]}},
    {path: 'reservation', component: ReservationComponent,data: {roles: [Role.USER,Role.ADMIN,Role.WAITER,Role.GUEST]}},
    {path: 'rating', component: RatingComponent,data:{roles: [Role.USER,Role.ADMIN, Role.GUEST]}},
    {path: '**', component: ErrorComponent}
  ]
}];
