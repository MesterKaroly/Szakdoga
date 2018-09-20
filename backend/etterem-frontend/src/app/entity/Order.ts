import {Food} from "./Food";

export class Order {

  private _id:number;
  private fullname:String;
  private phonenumber: String;
  private _comments: String;
  private tablenumber: number;
  private foods:Food[];


  constructor(fullname:String, comments?: String,id?:number) {
    this.fullname=fullname;
    this._comments = comments || "";
    this.foods=[];
    this._id=id;
  }

  addFood(food:Food){
    this.foods.push(food);
  }


  set comments(value: String) {
    this._comments = value;
  }

  get id(): number {
    return this._id;
  }
}
