import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ReservationService} from "../services/reservation.service";
import {DataSource} from "@angular/cdk/table";
import {Observable} from "rxjs";
import {Reservation} from "../entity/Reservation";
import {Role} from "../entity/Role";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  realdisplayedColumns: string[] = ['position','fullname', 'phonenumber', 'comment','date','tablenumber','edit'];
  displayedColumns: string[] = ['position','fullname', 'phonenumber', 'comment','date','tablenumber'];
  realdataSource: DataSource<any> = new ReservationDataSource(this.reservationService);

  reservationForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('',[Validators.required]),
    picker: new  FormControl('',[Validators.required]),
    tablenumber: new  FormControl(''),
    comment: new FormControl('')
  });

  isloggedin:boolean;
  role: Role;
  waiterRole: Role= Role.WAITER;
  adminRole: Role=Role.ADMIN;
  reservationer: Reservation;


  constructor(private authService: AuthService,private reservationService: ReservationService) {
    this.isloggedin=this.authService.isLoggedIn;
    this.role=this.authService.user.role;
  }

  ngOnInit() {
  }

  add(){
    this.reservationService.update(new Reservation(this.username.value,this.phonenumber.value,this.comment.value,this.picker.value))
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
  update (){
    this.reservationService.save(this.reservationer.id,this.reservationForm.get('tablenumber').value);
  }
  load(id: number) {
    this.reservationService.getReservationer(id)
      .map(res=> {
        this.reservationer = res
      });
    this.reservationForm.get('username').setValue(this.reservationer.fullname);
    this.reservationForm.get('phonenumber').setValue(this.reservationer.phoneNumber);
    this.reservationForm.get('picker').setValue(this.reservationer.dates);
    this.reservationForm.get('comment').setValue(this.reservationer.comments);
  }

  get username(): AbstractControl{
    return this.reservationForm.get('username');
  }

  get phonenumber(): AbstractControl{
    return this.reservationForm.get('phonenumber');
  }
  get comment(): AbstractControl{
    return this.reservationForm.get('comment');
  }
  get picker(): AbstractControl{
    return this.reservationForm.get('picker');
  }
  get tablenumber():AbstractControl{
    return this.reservationForm.get('tablenumber');
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
