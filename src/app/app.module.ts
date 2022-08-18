// Core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Developer's
import { AppComponent } from './app.component';
// PrimeNg modules
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { AppRouter } from './router/app-router.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouter,
    BrowserModule,
    SharedModule,
    PrimeNgModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
