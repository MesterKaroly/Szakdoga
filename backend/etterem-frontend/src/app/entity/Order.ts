import {Food} from "./Food";
import {User} from "./User";

export class Order {

  private _user:User;
  private _comments: String;
  private foods:Food[];


  constructor(user:User, comments?: String) {
    this._user=user;
    this._comments = comments || "";
    this.foods=[];
  }

  get user(): User {
    return this._user;
  }

  get comments(): String {
    return this._comments;
  }

  addFood(food:Food){
    this.foods.push(food);
  }

  set comments(value: String) {
    this._comments = value;
  }
}
