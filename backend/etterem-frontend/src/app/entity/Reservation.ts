


export class Reservation{

  public id:number;
  public fullname:String;
  public phonenumber:String;
  public comments: String;
  public dates:Date;
  public tablenumber: number;


  constructor(name?: String, phoneNumber?: String, comment?: String, date?: Date) {
    this.fullname = name;
    this.phonenumber = phoneNumber;
    this.comments = comment || "";
    this.dates = date;
  }

}
