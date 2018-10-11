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
  tablenumbers: number;


  constructor(private authService: AuthService,private reservationService: ReservationService) {
    this.isloggedin=this.authService.isLoggedIn;
    this.role=this.authService.user.role;
  }

  ngOnInit() {
    this.realdataSource = new ReservationDataSource(this.reservationService);
  }

  add(){
    this.reservationService.update(new Reservation(this.username.value,this.phonenumber.value,this.comment.value,this.picker.value))
      .subscribe(res=>this.ngOnInit(),
        err=>console.log(err));

  }
  toDate(timestamp: number): Date {
    return new Date(timestamp)
  }

  delete(id: number){
    this.reservationService.deleteReserv(id)
      .subscribe(
      res=> this.ngOnInit(),
      err=> console.log(err)
    );


  }
  update (){
    this.tablenumbers=this.reservationForm.get('tablenumber').value;
    this.reservationer.tablenumber=this.tablenumbers;
    this.reservationer.dates=this.reservationForm.get('picker').value;
    this.reservationService.save(this.reservationer)
      .subscribe(res=>this.ngOnInit(),
        err=>console.log(err))

  }
  load(id: number) {
    this.reservationService.getReservationer(id)
      .subscribe(
        res=> {this.reservationer = res;
        console.log(res);
        this.reservationForm.get('username').setValue(res.fullname);
        this.reservationForm.get('phonenumber').setValue(res.phonenumber);
        this.reservationForm.get('comment').setValue(res.comments);
        },
        err=>console.log(err));
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
