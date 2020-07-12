import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './deviceList.component';

export const routes: Routes = [
  { path: '', component: DeviceListComponent },
];

@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class DeviceListModule { }