import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';

const appRoutes: Routes = [
  { path: 'cart', component: ShopingCartComponent },
  { path: 'list', component: ShopingListComponent },
  { path: '**', component: ShopingListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ShopingListComponent,
    ShopingCartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
