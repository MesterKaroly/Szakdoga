export class Reservation{

  private name:String;
  private phoneNumber:String;
  private comment: String;


  constructor(name?: String, phoneNumber?: String,comment?: String) {
    this.name = name || "";
    this.phoneNumber = phoneNumber || "";
    this.comment=comment || "";
  }
}
