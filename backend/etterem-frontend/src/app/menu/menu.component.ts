import { Component, OnInit } from '@angular/core';
import {Role} from "../entity/Role";


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

  /*private common: MenuItem[] = [
    {link: '/cooking', title: 'Cooking',},
  ];

  private roleMenus = new Map<String, MenuItem[]>([
    [Role.GUEST, [...this.common]]
    [Role.USER, [...this.common, {link: '/materials', title: 'Materials'}]],
    [Role.ADMIN, [{link: '/admin', title: 'Admin'}, {link: '/materials', title: 'Materials'},{link: '/cooking', title: 'Cooking'}]]
  ]);*/

  menus: MenuItem[];


  constructor() { }

  ngOnInit() {
  }

}
