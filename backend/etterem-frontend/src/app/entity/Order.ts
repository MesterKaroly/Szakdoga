export class Order {

  public fullname:String;
  public phonenumber: String;
  public comments: String;
  public tablenumber: number;
  public foods:String;


  constructor(fullname:String,phonenumber?:String, comments?: String,foods?:String,tablenumber?:number) {
    this.fullname=fullname;
    this.comments = comments || "";
    this.phonenumber=phonenumber || "00000000";
    this.tablenumber=tablenumber || 0;
    this.foods=foods;
  }
}
