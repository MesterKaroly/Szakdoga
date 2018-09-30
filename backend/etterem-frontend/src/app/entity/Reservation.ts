


export class Reservation{

  private _id:number;
  private _fullname:String;
  private _phoneNumber:String;
  private _comments: String;
  private _dates:Date;
  private tablenumber: number;


  constructor(name?: String, phoneNumber?: String, comment?: String, date?: Date) {
    this._fullname = name;
    this._phoneNumber = phoneNumber;
    this._comments = comment || "";
    this._dates = date;
  }


  get id(): number {
    return this._id;
  }

  get fullname(): String {
    return this._fullname;
  }

  get phoneNumber(): String {
    return this._phoneNumber;
  }

  get comments(): String {
    return this._comments;
  }

  get dates(): Date {
    return this._dates;
  }
}
