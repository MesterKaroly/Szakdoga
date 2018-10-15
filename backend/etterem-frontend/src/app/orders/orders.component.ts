import {Component, OnInit} from '@angular/core';
import {DataSource} from "@angular/cdk/table";
import {Observable} from "rxjs";
import {OrdersService} from "../services/orders.service";
import {Order} from "../entity/Order";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  realdisplayedColumns: string[] = ['position', 'name', 'comments', 'food', 'tablenumber', 'edit'];
  realdataSource: DataSource<any> = new OrdersDataSource(this.ordersService);


  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.realdataSource = new OrdersDataSource(this.ordersService);
  }

  delete(id: number) {
    this.ordersService.deleteOrder(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
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
