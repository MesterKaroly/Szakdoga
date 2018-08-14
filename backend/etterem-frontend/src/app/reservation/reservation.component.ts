import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ReservationService} from "../services/reservation.service";
import {DataSource} from "../../../node_modules/@angular/cdk/table";
import {Observable} from "rxjs";
import {Reservation} from "../entity/Reservation";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','edit'];
  realdisplayedColumns: string[] = ['position','fullname', 'phonenumber', 'comment','edit'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
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

  delete(id: number){
    this.reservationService.deleteReserv(id).subscribe(
      res=> console.log(res),
      err=> console.log(err)
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
