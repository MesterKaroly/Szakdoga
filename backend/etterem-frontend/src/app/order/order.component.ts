import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {DataSource} from "@angular/cdk/table";
import {CarteService} from "../services/carte.service";
import {Observable} from "rxjs";
import {Food} from "../entity/Food";
import {OrderService} from "../services/order.service";
import {Order} from "../entity/Order";
import {AuthService} from "../services/auth.service";


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
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  realdisplayedColumns: string[] = ['name', 'ingredients', 'price','edit'];
  realdataSource: DataSource<any> = new OrderDataSource(this.carteService);

  orderForm: FormGroup = new FormGroup({
    comment: new FormControl('')
  });

  order: Order;

  constructor(private orderService:OrderService,
              private carteService: CarteService,
              private authService: AuthService) {
    this.order=new Order(this.authService.user.fullname);
  }

  ngOnInit() {
    this.realdataSource = new OrderDataSource(this.carteService);
  }

  add(id: number,name: String,ingredients: String,price: number){
    this.order.addFood(new Food(name,ingredients,price));
    this.order.comments=this.comment.value;
    console.log(this.order);
    this.orderService.update(this.order);
    this.ngOnInit();
  }

  get comment(): AbstractControl{
    return this.orderForm.get('comment');
  }

}
export class OrderDataSource extends DataSource<any> {
  constructor(private carteService: CarteService) {
    super();
  }

  connect(): Observable<Food[]> {
    return this.carteService.getCarte();
  }

  disconnect() {
  }
}
