import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {MaterialItemsModule} from "./MaterialItemsModule";
import {MenuComponent} from './menu/menu.component';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ErrorComponent} from './error/error.component';
import {CarteComponent} from './carte/carte.component';
import {OrderComponent} from './order/order.component';
import {ReservationComponent} from './reservation/reservation.component';
import {OrdersComponent} from './orders/orders.component';
import {RatingComponent} from './rating/rating.component';
import {AuthService} from "./services/auth.service";
import {CarteService} from "./services/carte.service";
import {OrderService} from "./services/order.service";
import {OrdersService} from "./services/orders.service";
import {RatingService} from "./services/rating.service";
import {ReservationService} from "./services/reservation.service";
import {RouteGuard} from "./route.guard";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {HttpClientModule} from "@angular/common/http";
import {BasketService} from "./services/basket.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    ErrorComponent,
    CarteComponent,
    OrderComponent,
    ReservationComponent,
    OrdersComponent,
    RatingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule,
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    ErrorComponent,
    CarteComponent,
    OrderComponent,
    ReservationComponent,
    OrdersComponent,
    RatingComponent
  ],
  providers: [AuthService, CarteService, OrderService, OrdersService, RatingService, ReservationService,BasketService, RouteGuard,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
