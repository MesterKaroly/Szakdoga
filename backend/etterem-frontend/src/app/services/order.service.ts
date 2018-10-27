import {Injectable} from '@angular/core';
import {Order} from "../entity/Order";
import {Observable} from "rxjs";
import {Routes, Server} from "../utils/ServerRoutes";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  update(order: Order): Observable<Order> {
    return this.http.post<Order>(Server.routeTo(Routes.UPDATEORDER), order)
      .map(res => res);
  }
}
