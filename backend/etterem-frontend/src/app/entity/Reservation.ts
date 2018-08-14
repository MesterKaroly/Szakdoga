export class Reservation{

  private id:number;
  private name:String;
  private phoneNumber:String;
  private comment: String;


  constructor(name?: String, phoneNumber?: String,comment?: String,id?: number) {
    this.name = name || "";
    this.phoneNumber = phoneNumber || "";
    this.comment=comment || "";
    this.id=id;
  }
}
