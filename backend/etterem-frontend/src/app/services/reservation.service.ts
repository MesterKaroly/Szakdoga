import {Injectable} from '@angular/core';
import {Reservation} from "../entity/Reservation";
import {Observable} from "rxjs";
import {Routes, Server} from "../utils/ServerRoutes";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ReservationService {

  constructor(private http: HttpClient) {
  }

  getReserv(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(Server.routeTo(Routes.RESERVATIONS))
      .map(res => res);
  }

  update(reservation: Reservation): Observable<Reservation> {
    console.log(reservation);
    return this.http.post<Reservation>(Server.routeTo(Routes.RESERVATIONADD), reservation)
      .map(res => res);
  }

  deleteReserv(id: number): Observable<Reservation> {
    return this.http.delete<Reservation>(Server.routeTo(Routes.DELETERESERVATION) + '/' + id)
      .map(res => res);
  }

  getReservationer(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(Server.routeTo(Routes.GETRESERVATIONER) + '/' + id)
      .map(res => res);
  }

  save(reservationer: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(Server.routeTo(Routes.RESERVATIONSAVE), reservationer)
      .map(res => res);
  }
}
