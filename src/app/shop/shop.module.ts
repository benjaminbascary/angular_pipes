import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { CommonComponent } from './pages/common/common.component';
import { OrdinateComponent } from './pages/ordinate/ordinate.component';



@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    CommonComponent,
    OrdinateComponent
  ],
  exports: [
    NumbersComponent,
    UncommonComponent,
    CommonComponent,
    OrdinateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
