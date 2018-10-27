import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Order} from "../entity/Order";
import {Routes, Server} from "../utils/ServerRoutes";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(Server.routeTo(Routes.ORDERS))
      .map(res => res);
  }

  deleteOrder(id: number) {
    return this.http.delete(Server.routeTo(Routes.DELETEORDER) + '/' + id)
      .map(res => res,
        err => console.log(err));
  }

}
