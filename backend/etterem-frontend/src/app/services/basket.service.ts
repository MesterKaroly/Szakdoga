import {Injectable} from '@angular/core';
import {Basket} from "../entity/Basket";
import {Observable} from "rxjs";
import {Routes, Server} from "../utils/ServerRoutes";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BasketService {

  constructor(private http: HttpClient) {
  }

  getBasket(basket: Basket): Observable<Basket[]> {
    return this.http.post<Basket[]>(Server.routeTo(Routes.FINDOWNBASKET), basket)
      .map(res => res);
  }

  updateBasket(basket: Basket): Observable<Basket> {
    return this.http.post<Basket>(Server.routeTo(Routes.UPDATEBASKET), basket)
      .map(res => res);

  }

  deleteBasket(id: number): Observable<Basket> {
    return this.http.delete<Basket>(Server.routeTo(Routes.DELETEBASKET) + '/' + id)
      .map(res => res);
  }

  deleteOneElementOfBasket(id:number): Observable<Basket>{
    return this.http.delete<Basket>(Server.routeTo(Routes.DELETEONEELEMENTOFBASKET)+'/'+id)
      .map(res=>res);

  }

}
