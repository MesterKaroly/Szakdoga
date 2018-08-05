import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  raitingForm: FormGroup= new FormGroup({
    comment: new FormControl('',Validators.required)
  });
    comments: string='';
    date:Date;
  constructor() { }

  ngOnInit() {
  }
  submit(){
    this.date=new Date();
    this.comments=this.comment.value;
  }

  get comment(): AbstractControl{
    return this.raitingForm.get('comment');
  }
}
