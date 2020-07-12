import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'device', loadChildren: './components/device/form/device.module#DeviceModule'
  },
  {
    path: 'customer', loadChildren: './components/customer/form/customer.module#CustomerModule'
  },
  {
    path: 'professional', loadChildren: './components/professional/form/professional.module#ProfessionalModule'
  },
  {
    path: 'order', loadChildren: './components/order/form/order.module#OrderModule'
  },
  {
    path: 'orderOcurrence', loadChildren: './components/order/ocurrence/orderocurrence.module#OrderOcurrenceModule'
  },
  {
    path: 'orderList', loadChildren: './components/order/list/orderList.module#OrderListModule'
  },
  {
    path: 'deviceList', loadChildren: './components/device/list/deviceList.module#DeviceListModule'
  },
  {
    path: 'customerList', loadChildren: './components/customer/list/customerList.module#CustomerListModule'
  },
  {
    path: 'professionalList', loadChildren: './components/professional/list/professionalList.module#ProfessionalListModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
