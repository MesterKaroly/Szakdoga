import { Injectable } from '@angular/core';
import {User} from "../entity/User";
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs";
import "rxjs-compat/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  isLoggedIn:boolean=false;

  constructor(private http: Http) {
    this.user=new User();
  }
  login(user:User): Observable<User> {
    return this.http.post(Server.routeTo(Routes.LOGIN),user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res.json();
        return this.user;
    });
  }
  register(user: User): Observable<User> {
    return this.http.post(Server.routeTo(Routes.REGISTER), user)
      .map(res=>{
        this.isLoggedIn=true;
        this.user=res.json();
        return this.user;
    });

  }
}
