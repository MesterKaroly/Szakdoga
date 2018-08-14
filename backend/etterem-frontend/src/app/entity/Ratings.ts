export class Ratings{

  private fullname: String;
  private date:Date;
  private comments:String;


  constructor(fullname?: String, date?: Date, comments?: String) {
    this.fullname = fullname;
    this.date = date;
    this.comments = comments;
  }
}
