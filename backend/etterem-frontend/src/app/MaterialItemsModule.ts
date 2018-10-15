import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {NgModule} from "@angular/core";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule, MatSelectModule, MatGridListModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatProgressBarModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule, MatSelectModule, MatGridListModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatProgressBarModule],
})
export class MaterialItemsModule {
}
