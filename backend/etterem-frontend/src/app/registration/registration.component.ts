import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

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
    email: new FormControl('', [Validators.required]),
    selected: new FormControl('',[Validators.required])
  });

  role: String='';

  constructor() { }

  ngOnInit() {
  }

  submit(){

  }

  get fullname(): AbstractControl{
    return this.registrationForm.get('fullname')
  }

  get username(): AbstractControl{
    return this.registrationForm.get('username')
  }
  get password(): AbstractControl{
    return this.registrationForm.get('password')
  }
  get email(): AbstractControl{
    return this.registrationForm.get('email')
  }

  setRole(event){
    this.role=event.source.triggerValue;
  }
  get selected(): AbstractControl{
    return this.registrationForm.get('selected')
  }

}
