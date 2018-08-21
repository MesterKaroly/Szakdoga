export class Ratings{

  private _fullname: String;
  private _date:Date;
  private _comments:String;
  private _ratingpoint:number;


  constructor(fullname?: String, date?: Date, comments?: String, ratingpoint?: number) {
    this._fullname = fullname;
    this._date = date;
    this._comments = comments || "";
    this._ratingpoint = ratingpoint;
  }

  get fullname(): String {
    return this._fullname;
  }

  set fullname(value: String) {
    this._fullname = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get comments(): String {
    return this._comments;
  }

  set comments(value: String) {
    this._comments = value;
  }

  get ratingpoint(): number {
    return this._ratingpoint;
  }

  set ratingpoint(value: number) {
    this._ratingpoint = value;
  }
}
