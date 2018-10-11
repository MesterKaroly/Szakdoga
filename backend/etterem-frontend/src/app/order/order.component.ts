import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {DataSource} from "@angular/cdk/table";
import {CarteService} from "../services/carte.service";
import {Observable} from "rxjs";
import {Food} from "../entity/Food";
import {OrderService} from "../services/order.service";
import {Order} from "../entity/Order";
import {AuthService} from "../services/auth.service";
import {BasketService} from "../services/basket.service";
import {Basket} from "../entity/Basket";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  basket: Basket= new Basket();
  helpBasket: Basket[]=[];

  realdisplayedColumns: string[] = ['name', 'ingredients', 'price','edit'];
  realdataSource: DataSource<any> = new OrderDataSource(this.carteService);

  basketDisplayedColumns: string[]=['name','foodname','foodingredients','price'];
  basketdataSource: DataSource<any> = new BasketDataSource(this.basketService,this.basket);

  orderForm: FormGroup = new FormGroup({
    comment: new FormControl('')
  });



  constructor(private orderService:OrderService,
              private carteService: CarteService,
              private authService: AuthService,
              private basketService:BasketService) {
  }


  ngOnInit() {
    this.basketdataSource = new BasketDataSource(this.basketService,this.basket);
  }

  add(name: String,ingredients:String,price:number){
    this.basket=new Basket(0,this.authService.user.fullname,name,ingredients,price );
    this.basketService.updateBasket(this.basket)
      .subscribe(res=>this.ngOnInit(),
        err=>console.log(err));
    this.basketdataSource = new BasketDataSource(this.basketService,this.basket);
  }
  createorder(){
    this.basketService.getBasket(this.basket)
      .subscribe(
        res=>{this.helpBasket=Object.keys(res).map(e=>res[e]);},
        err=>console.log(err));

    let rendeltkaja="";
    for (let element of this.helpBasket){
      rendeltkaja=rendeltkaja+element.foodname+',';
      this.basketService.deleteBasket(element.id)
        .subscribe(
          res=>this.ngOnInit(),
          err=>console.log(err));
    }

    if (rendeltkaja!="") {
      this.order=new Order(this.authService.user.fullname,"000000",this.comment.value,rendeltkaja,4);
      this.orderService.update(this.order)
        .subscribe(res=>this.ngOnInit(),
          err=>console.log(err));
    }
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

export class BasketDataSource extends DataSource<any> {
  constructor(private basketService: BasketService,private basket:Basket) {
    super();
  }

  connect(): Observable<Basket[]> {
    return this.basketService.getBasket(this.basket);
  }

  disconnect() {
  }
}
