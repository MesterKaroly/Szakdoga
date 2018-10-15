import {Injectable} from '@angular/core';
import {Order} from "../entity/Order";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  update(order: Order): Observable<Order> {
    return this.http.post(Server.routeTo(Routes.UPDATEORDER), order)
      .map(res => res.json());
  }
}
