import {Role} from "./Role";

export class User{

  private _fullname:String;
  private _username:String;
  private _password:String;
  private _email:String;
  private _role:Role;


  constructor(fullname?: String,username?: String, password?: String, email?: String, role?: Role) {
    this._fullname=fullname || "";
    this._username = username || "";
    this._password = password || "";
    this._email = email || "";
    this._role = role || Role.USER;
  }

  get fullname(): String {
    return this._fullname;
  }

  get username(): String {
    return this._username;
  }

  get password(): String {
    return this._password;
  }

  get email(): String {
    return this._email;
  }

  get role(): Role {
    return this._role;
  }
}
