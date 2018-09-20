import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ReservationService} from "../services/reservation.service";
import {DataSource} from "@angular/cdk/table";
import {Observable} from "rxjs";
import {Reservation} from "../entity/Reservation";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  realdisplayedColumns: string[] = ['position','fullname', 'phonenumber', 'comment','date','tablenumber','edit'];
  realdataSource: DataSource<any> = new ReservationDataSource(this.reservationService);

  reservationForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('',[Validators.required]),
    comment: new FormControl('')
  });

  isloggedin:boolean;

  constructor(private authService: AuthService,private reservationService: ReservationService) {
    this.isloggedin=this.authService.isLoggedIn;
  }

  ngOnInit() {
  }

  add(){
    this.reservationService.update(new Reservation(this.username.value,this.phonenumber.value,this.comment.value))
  }
  toDate(timestamp: number): Date {
    return new Date(timestamp)
  }

  delete(id: number){
    this.reservationService.deleteReserv(id).subscribe(
      res=> console.log(res),
      err=> console.log(err)
    );

  }

  get username(): AbstractControl{
    return this.reservationForm.get('username')
  }

  get phonenumber(): AbstractControl{
    return this.reservationForm.get('phonenumber')
  }
  get comment(): AbstractControl{
    return this.reservationForm.get('comment');
  }


}
export class ReservationDataSource extends DataSource<any> {
  constructor(private reservationService: ReservationService) {
    super();
  }

  connect(): Observable<Reservation[]> {
    return this.reservationService.getReserv();
  }

  disconnect() {
  }
}
