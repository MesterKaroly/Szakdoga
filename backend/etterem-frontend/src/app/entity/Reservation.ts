export class Reservation{

  private name:String;
  private phoneNumber:String;
  private email:String;
  private event:String;
  private reservNumber:Number;


  constructor(name?: String, phoneNumber?: String, email?: String, event?: String, reservNumber?: Number) {
    this.name = name || "";
    this.phoneNumber = phoneNumber || "";
    this.email = email || "";
    this.event = event || "";
    this.reservNumber = reservNumber || 0;
  }
}
