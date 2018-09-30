


export class Reservation{

  public id:number;
  public fullname:String;
  public phoneNumber:String;
  public comments: String;
  public dates:Date;
  public tablenumber: number;


  constructor(name?: String, phoneNumber?: String, comment?: String, date?: Date) {
    this.fullname = name;
    this.phoneNumber = phoneNumber;
    this.comments = comment || "";
    this.dates = date;
  }

}
