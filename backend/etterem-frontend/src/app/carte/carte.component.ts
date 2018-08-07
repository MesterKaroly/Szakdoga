import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {DataSource} from "@angular/cdk/table";
import {CarteService} from "../services/carte.service";
import {Observable} from "rxjs";
import {Food} from "../entity/Food";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface PeriodicElements {
  name: string;
  position: number;
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
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  realdisplayedColumns: string[] = ['name', 'ingredients', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  realdataSource: DataSource<any> = new CarteDataSource(this.carteService);

  constructor(private carteService: CarteService) { }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export class CarteDataSource extends DataSource<any> {
  constructor(private carteService: CarteService) {
    super();
  }

  connect(): Observable<Food[]> {
    return this.carteService.getCarte();
  }

  disconnect() {
  }
}
