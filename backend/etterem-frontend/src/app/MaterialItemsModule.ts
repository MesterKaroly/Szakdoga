import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import {NgModule} from "@angular/core";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule, MatSelectModule,MatGridListModule,MatCardModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTableModule, MatSelectModule,MatGridListModule,MatCardModule],
})
export class MaterialItemsModule {
}
