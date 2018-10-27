import {Injectable} from '@angular/core';
import {User} from "../entity/User";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs";
import "rxjs-compat/add/operator/map";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  user: User;
  public isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res;
        return this.user;
      });
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(Server.routeTo(Routes.REGISTER), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res;
        return this.user;
      });

  }

  logout() {
    return this.http.get(Server.routeTo(Routes.LOGOUT))
      .map(res => {
        this.user = new User();
        this.isLoggedIn = false;
      });

  }
}
