import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../entity/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  get username(): AbstractControl {
    return this.loginForm.get('username')
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')
  }

  ngOnInit() {
  }

  submit() {
    this.authService.login(new User(this.username.value, this.password.value))
      .subscribe(
        res => this.router.navigate(['/rating']),
        err => console.log(err))
  }

}
