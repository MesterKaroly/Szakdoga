


export class Reservation{

  private id:number;
  private fullname:String;
  private phoneNumber:String;
  private comments: String;
  private dates:Date;
  private tablenumber: number;


  constructor(id?: number, name?: String, phoneNumber?: String, comment?: String, date?: Date) {
    this.id = id;
    this.fullname = name;
    this.phoneNumber = phoneNumber;
    this.comments = comment || "";
    this.dates = date;
  }
}
