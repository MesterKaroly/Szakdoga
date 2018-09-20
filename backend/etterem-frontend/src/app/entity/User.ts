import {Role} from "./Role";

export class User{

  private _fullname:String;
  private username:String;
  private password:String;
  private email:String;
  private _role:Role;


  constructor(fullname?: String,username?: String, password?: String, email?: String, role?: Role) {
    this._fullname=fullname || "";
    this.username = username || "";
    this.password = password || "";
    this.email = email || "";
    this._role = role || Role.USER;
  }

  get role(): Role {
    return this._role;
  }

  get fullname(): String {
    return this._fullname;
  }
}
