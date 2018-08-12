import { Component, OnInit } from '@angular/core';
import {DataSource} from "../../../node_modules/@angular/cdk/table";
import {CarteService} from "../services/carte.service";
import {Observable} from "rxjs";
import {Food} from "../entity/Food";
import {OrdersService} from "../services/orders.service";
import {Order} from "../entity/Order";



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','edit'];
  realdisplayedColumns: string[] = ['name', 'food','edit'];
  dataSource = ELEMENT_DATA;
  realdataSource: DataSource<any> =new OrdersDataSource(this.ordersService);


  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

  delete(id: number){
      this.ordersService.deleteOrder(id)
        .subscribe(
          res=> console.log(res),
          err=> console.log(err)
        );
  }

}
export class OrdersDataSource extends DataSource<any> {
  constructor(private ordersService: OrdersService) {
    super();
  }

  connect(): Observable<Order[]> {
    return this.ordersService.getOrders();
  }

  disconnect() {
  }
}
