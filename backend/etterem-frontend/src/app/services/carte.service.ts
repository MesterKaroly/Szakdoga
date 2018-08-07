import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Food} from "../entity/Food";
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  constructor(private http: Http) { }

  getCarte(): Observable<Food[]> {
    return this.http.get(Server.routeTo(Routes.CARTE))
      .map(res=>res.json());

  }
}
