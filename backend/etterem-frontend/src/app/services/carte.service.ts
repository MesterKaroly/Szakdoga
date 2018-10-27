import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Food} from "../entity/Food";
import {Routes, Server} from "../utils/ServerRoutes";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CarteService {

  constructor(private http: HttpClient) {
  }

  getCarte(): Observable<Food[]> {
    return this.http.get<Food[]>(Server.routeTo(Routes.CARTE))
      .map(res => res);

  }

}
