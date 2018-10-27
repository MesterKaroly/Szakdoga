import {Injectable} from '@angular/core';
import {Ratings} from "../entity/Ratings";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RatingService {

  constructor(private http: HttpClient) {
  }

  create(ratings: Ratings): Observable<Ratings> {
    return this.http.post<Ratings>(Server.routeTo(Routes.RATINGADD), ratings)
      .map(res => res);
  }

  getRating(): Observable<Ratings[]> {
    return this.http.get<Ratings[]>(Server.routeTo(Routes.RATINGGET))
      .map(res => res);
  }
}
