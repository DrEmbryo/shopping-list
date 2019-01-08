import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { AddFormComponent } from './add-form/add-form.component';

const appRoutes: Routes = [
  { path: 'add', component: AddFormComponent },
  { path: 'cart', component: ShopingCartComponent },
  { path: '**', component: AddFormComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ShopingCartComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
