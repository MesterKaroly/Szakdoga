import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Basket} from "../entity/Basket";
import {Observable} from "rxjs";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: Http) { }

  getBasket(basket:Basket):Observable<Basket[]>{
    return this.http.post(Server.routeTo(Routes.FINDOWNBASKET),basket)
      .map(res=>res.json());
  }

  updateBasket(basket:Basket):Observable<Basket>{
    return this.http.post(Server.routeTo(Routes.UPDATEBASKET),basket)
      .map(res=>res.json());

  }

  deleteBasket(id: number): Observable<Basket>{
    return this.http.delete(Server.routeTo(Routes.DELETEBASKET)+'/'+id)
      .map(res=>res.json(),
        err=>console.log(err));
  }

}
