export class Ratings{

  private _fullname: String;
  private _date:Date;
  private _comments:String;


  constructor(fullname?: String, date?: Date, comments?: String) {
    this._fullname = fullname;
    this._date = date;
    this._comments = comments;
  }


  get fullname(): String {
    return this._fullname;
  }

  get date(): Date {
    return this._date;
  }

  get comments(): String {
    return this._comments;
  }
}
