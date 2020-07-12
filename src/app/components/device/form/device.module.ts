import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device.component';
 
export const routes: Routes = [
    { path: '', component: DeviceComponent },
  ];

  @NgModule({
    declarations: [DeviceComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
    ]
  })
  export class DeviceModule { }