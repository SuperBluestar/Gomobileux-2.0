import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats/stats.component';
import { ApphomelayoutComponent } from './apphomelayout.component';
import { StyleComponent } from './style/style.component';
import { ShophomeComponent } from './shophome/shophome.component';
import { SettingsComponent } from './settings/settings.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',
    component: ApphomelayoutComponent,

    children:[
      {
        path:'shophome',
        component: ShophomeComponent
      },      
      {
        path:'stats',
        component: StatsComponent
      },   
      {
        path:'style',
        component: StyleComponent
      },      
      {
        path:'settings',
        component: SettingsComponent
      },
      {
        path:'cart',
        component: CartComponent
      },      
      {
        path:'address',
        component: AddressComponent
      },      
      {
        path:'payment',
        component: PaymentComponent
      } 
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class ApphomelayoutRoutingModule { }
