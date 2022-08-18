import { NgModule } from '@angular/core';

// Button
import { ButtonModule } from 'primeng/button';
// Card
import { CardModule } from 'primeng/card';
// Menu
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
  ],
  imports: []
})
export class PrimeNgModule { }
