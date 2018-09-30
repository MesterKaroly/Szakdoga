import {Food} from "./Food";

export class Order {

  public id:number;
  private fullname:String;
  private phonenumber: String;
  public comments: String;
  private tablenumber: number;
  private foods:Food[];


  constructor(fullname:String, comments?: String,id?:number) {
    this.fullname=fullname;
    this.comments = comments || "";
    this.foods=[];
    this.id=id;
  }

  addFood(food:Food){
    this.foods.push(food);
  }
}
