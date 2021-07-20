import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCartComponent } from './components/app-cart/app-cart.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCartComponent,
    CartContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
