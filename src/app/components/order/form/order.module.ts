import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
 
export const routes: Routes = [
    { path: '', component: OrderComponent },
  ];

  @NgModule({
    declarations: [OrderComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
    ]
  })
  export class OrderModule { }