import { Injectable } from '@angular/core';
import {Order} from "../entity/Order";
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:Http) { }

  add(order: Order) {
    this.http.post(Server.routeTo(Routes.ADDORDER),order);
  }

  update(order: Order) {
    this.http.post(Server.routeTo(Routes.UPDATEORDER)+'/'+order.id,order);
  }
}
