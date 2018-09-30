export class Ratings{

  public fullname: String;
  public dates:Date;
  public comments:String;
  public ratingpoint:number;


  constructor(fullname?: String, date?: Date, comments?: String, ratingpoint?: number) {
    this.fullname = fullname;
    this.dates = date;
    this.comments = comments || "";
    this.ratingpoint = ratingpoint;
  }
}
