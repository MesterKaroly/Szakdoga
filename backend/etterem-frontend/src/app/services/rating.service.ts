import { Injectable } from '@angular/core';
import {Ratings} from "../entity/Ratings";
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:Http) { }

  add(ratings: Ratings) {
      this.http.post(Server.routeTo(Routes.RATINGADD),ratings);
  }
  getRating(): Observable<Ratings[]>{
    return this.http.get(Server.routeTo(Routes.RATINGGET))
      .map(res=> res.json());
  }
}
