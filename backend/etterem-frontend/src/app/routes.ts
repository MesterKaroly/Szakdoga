import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ErrorComponent} from "./error/error.component";
import {CarteComponent} from "./carte/carte.component";
import {OrderComponent} from "./order/order.component";
import {OrdersComponent} from "./orders/orders.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {RatingComponent} from "./rating/rating.component";

export const appRoutes: Routes = [{
  path:'',
  children:[
    {path: '', redirectTo: 'rating', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path:'carte', component: CarteComponent},
    {path: 'order', component: OrderComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'rating', component: RatingComponent},
    {path: '**', component: ErrorComponent}
  ]
}];
