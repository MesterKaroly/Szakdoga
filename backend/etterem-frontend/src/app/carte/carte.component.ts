import {Component, OnInit} from '@angular/core';
import {DataSource} from "@angular/cdk/table";
import {CarteService} from "../services/carte.service";
import {Observable} from "rxjs";
import {Food} from "../entity/Food";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  realdisplayedColumns: string[] = ['name', 'ingredients', 'price'];
  realdataSource: DataSource<any> = new CarteDataSource(this.carteService);

  constructor(private carteService: CarteService) { }


  ngOnInit() {
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
