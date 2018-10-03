import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../entity/Order";
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:Http) { }

  getOrders(): Observable<Order[]> {
    return this.http.get(Server.routeTo(Routes.ORDERS))
      .map(res => res.json());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete(Server.routeTo(Routes.DELETEORDER)+'/'+id.toString())
      .map(res=> res.json());

  }

}
