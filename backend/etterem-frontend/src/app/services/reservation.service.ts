import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Reservation} from "../entity/Reservation";
import {Observable} from "rxjs";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: Http) { }

  getReserv(): Observable<Reservation[]> {
    return this.http.get(Server.routeTo(Routes.RESERVATIONS))
      .map(res => res.json());
  }

  update(reservation: Reservation) {
    this.http.post(Server.routeTo(Routes.RESERVATIONADD),reservation);
  }

  deleteReserv(id: number): Observable<Reservation> {
    return this.http.delete(`${Server.routeTo(Routes.DELETERESERVATION)}/${id}`)
      .map(res=> res.json());
  }
}
