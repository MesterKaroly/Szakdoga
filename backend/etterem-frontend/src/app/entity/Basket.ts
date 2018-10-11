export class Basket {

  public id:number;
  public name:String;
  public foodname:String;
  public foodingredients:String;
  public price: number;


  constructor(id?:number,name?: String, foodname?: String, foodingredients?: String, price?: number) {
    this.id=id;
    this.name = name || "";
    this.foodname = foodname || "";
    this.foodingredients = foodingredients || "";
    this.price = price || 0;
  }
}
