import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {RatingService} from "../services/rating.service";
import {AuthService} from "../services/auth.service";
import {Ratings} from "../entity/Ratings";
import {Observable} from "rxjs";
import {DataSource} from "@angular/cdk/table";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  datasource: DataSource<any>= new RatingDataSource(this.ratingService);

  raitingForm: FormGroup= new FormGroup({
    comment: new FormControl('',Validators.required)
  });
    comments: string='';
    date:Date;
    ratings:Ratings;
  constructor(private ratingService: RatingService,private authService: AuthService) {
  }

  ngOnInit() {
  }


  submit(){
    this.date=new Date();
    this.ratingService.add(new Ratings(this.authService.user.fullname,this.date,this.comment.value));
  }

  get comment(): AbstractControl{
    return this.raitingForm.get('comment');
  }
}

export class RatingDataSource extends DataSource<any> {
  constructor(private ratingService: RatingService) {
    super();
  }

  connect(): Observable<Ratings[]> {
    return this.ratingService.getRating();
  }

  disconnect() {
  }
}
