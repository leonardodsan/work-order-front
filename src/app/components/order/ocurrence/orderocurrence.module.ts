import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { OrderOcurrenceComponent } from './orderocurrence.component';
 
export const routes: Routes = [
    { path: '', component: OrderOcurrenceComponent },
  ];

  @NgModule({
    declarations: [OrderOcurrenceComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
    ]
  })
  export class OrderOcurrenceModule { }