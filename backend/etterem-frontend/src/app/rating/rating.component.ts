import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {RatingService} from "../services/rating.service";
import {AuthService} from "../services/auth.service";
import {Ratings} from "../entity/Ratings";
import {Router} from "@angular/router";

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
    public ratings:Array<Ratings>;
  private rat: Ratings;

  constructor(private ratingService: RatingService,private authService: AuthService,private router:Router) {
  }

  ngOnInit() {
    this.ratingService.getRating().subscribe(rat=>this.ratings=rat,this.router.navigate['/rating']);
  }


  submit(){
    this.date=new Date();
    console.log(1);
    this.rat=new Ratings(this.authService.user.fullname,this.date,this.comment.value,5);
    this.ratingService.create(this.rat)
      .subscribe(
        res=>this.router.navigate['/rating'],
        err => console.log(err));
    this.ngOnInit();
  }

  toDate(timestamp: number): Date {
    return new Date(timestamp)
  }

  get comment(): AbstractControl{
    return this.raitingForm.get('comment');
  }
}
