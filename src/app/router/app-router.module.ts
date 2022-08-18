import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CommonComponent } from '../shop/pages/common/common.component';
import { NumbersComponent } from '../shop/pages/numbers/numbers.component';
import { UncommonComponent } from '../shop/pages/uncommon/uncommon.component';
import { OrdinateComponent } from '../shop/pages/ordinate/ordinate.component';

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'uncommon',
    component: UncommonComponent
  },
  {
    path: 'ordinate',
    component: OrdinateComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRouter { }
