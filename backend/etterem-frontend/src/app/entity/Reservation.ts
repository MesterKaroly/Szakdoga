export class Reservation{

  private id:number;
  private name:String;
  private phoneNumber:String;
  private comment: String;
  private date: Date;


  constructor(id?: number, name?: String, phoneNumber?: String, comment?: String, date?: Date) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.comment = comment || "";
    this.date = date;
  }
}
