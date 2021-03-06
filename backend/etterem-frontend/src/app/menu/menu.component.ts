import {Component, OnInit} from '@angular/core';
import {Role} from "../entity/Role";
import {AuthService} from "../services/auth.service";
import {NavigationEnd, Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";


interface MenuItem {
  link: String;
  title: String;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: MenuItem[];
  isloggedin: boolean;
  private roleMenus = new Map<String, MenuItem[]>([
    [Role.GUEST, [{link: '/login', title: 'Belépés'}, {link: '/registration', title: 'Regisztráció'}, {
      link: '/carte',
      title: 'Étlap'
    }, {link: '/reservation', title: 'Foglalások'}, {link: '/rating', title: 'Értékelés'}]],
    [Role.USER, [{link: '/carte', title: 'Étlap'}, {link: '/order', title: 'Rendelés'}
      , {link: '/reservation', title: 'Foglalás'}, {link: '/rating', title: 'Értékelés'}]],
    [Role.ADMIN, [{link: '/registration', title: 'Regisztráció'}, {link: '/carte', title: 'Étlap'},
      {link: '/order', title: 'Rendelés'}, {link: '/orders', title: 'Rendelések'}, {
        link: '/reservation',
        title: 'Foglalás'
      },
      {link: '/rating', title: 'Értékelés'}]],
    [Role.WAITER, [{link: '/carte', title: 'Étlap'}, {link: '/order', title: 'Rendelés'}, {
      link: '/reservation',
      title: 'Foglalás'
    }]],
    [Role.CHEF, [{link: '/orders', title: 'Rendelések'}, {link: '/carte', title: 'Étlap'}, {
      link: '/rating',
      title: 'Értékelés'
    }]]
  ]);

  constructor(private authService: AuthService, private router: Router,private cookieService: CookieService) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setMenus()
      }
    })
  }

  setMenus() {
    if (this.authService.isLoggedIn) {
      this.menus = this.roleMenus.get(this.authService.user.role.toString());
    } else {
      this.menus = this.roleMenus.get(Role.GUEST)
    }
    this.isloggedin = this.authService.isLoggedIn;
  }

  logout() {
    this.cookieService.delete('JSESSIONID');
    this.authService.logout().subscribe(
      res => this.router.navigate(['/login']),
      err => err
    );

  }
}
