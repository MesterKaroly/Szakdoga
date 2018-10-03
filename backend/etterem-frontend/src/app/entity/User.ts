import {Role} from "./Role";

export class User{

  public fullname:String;
  private username:String;
  private password:String;
  private email:String;
  public role:Role;


  constructor(username?: String, password?: String, email?: String,fullname?: String, role?: Role) {
    this.fullname = fullname || "";
    this.username = username || "";
    this.password = password || "";
    this.email = email || "";
    this.role = role || Role.GUEST;
  }
}
