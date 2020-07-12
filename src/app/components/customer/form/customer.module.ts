import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { TextMaskModule } from 'angular2-text-mask';
 
export const routes: Routes = [
    { path: '', component: CustomerComponent },    
  { path: ':id', component: CustomerComponent }
  ];

  @NgModule({
    declarations: [CustomerComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TextMaskModule,
      RouterModule.forChild(routes),
    ]
  })
  export class CustomerModule { }