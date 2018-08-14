import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../entity/User";
import {Role} from "../entity/Role";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  role: String='';
  realRole: Role;
  Admin:Role=Role.ADMIN;
  constructor(private authService: AuthService,private router: Router) {
    this.realRole=this.authService.user.role;
  }

  ngOnInit() {
  }

  submit(){
    this.authService.register(new User(this.fullname.value,this.username.value,this.password.value,this.email.value,this.role))
      .subscribe(
      res => this.router.navigate(['/login']),
      err => console.log(err));
  }

  get fullname(): AbstractControl{
    return this.registrationForm.get('fullname');
  }

  get username(): AbstractControl{
    return this.registrationForm.get('username');
  }
  get password(): AbstractControl{
    return this.registrationForm.get('password');
  }
  get email(): AbstractControl{
    return this.registrationForm.get('email');
  }

  setRole(event){
    this.role=event.source.triggerValue;
  }

}
