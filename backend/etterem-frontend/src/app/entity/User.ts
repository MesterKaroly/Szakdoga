import {Role} from "./Role";

export class User{

  private username:String;
  private password:String;
  private email:String;
  private role:Role;


  constructor(username?: String, password?: String, email?: String, role?: Role) {
    this.username = username || "";
    this.password = password || "";
    this.email = email || "";
    this.role = role || Role.USER;
  }
}
