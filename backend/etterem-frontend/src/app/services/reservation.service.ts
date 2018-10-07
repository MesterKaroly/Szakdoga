import {Injectable} from '@angular/core';
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

  update(reservation: Reservation): Observable<Reservation> {
    console.log(reservation);
    return this.http.post(Server.routeTo(Routes.RESERVATIONADD),reservation)
      .map(res=>res.json());
  }

  deleteReserv(id: number): Observable<Reservation> {
    return this.http.delete(Server.routeTo(Routes.DELETERESERVATION)+ '/'+id)
      .map(res=> res.json());
  }

  getReservationer(id: number): Observable<Reservation> {
    return this.http.get(Server.routeTo(Routes.GETRESERVATIONER)+ '/'+ id)
      .map(res=>res.json());
  }

  save(id: number, tablenumber: number) {
    this.http.post(Server.routeTo(Routes.RESERVATIONSAVE)+'/'+id,tablenumber)
      .map(res=>res.json());
  }
}
