import {Injectable} from '@angular/core';
import {Order} from "../entity/Order";
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:Http) { }

  update(order: Order) {
    console.log(order);
    this.http.post(Server.routeTo(Routes.UPDATEORDER),order)
      .map(res=>res.json(),
        err=>console.log(err));
  }
}
