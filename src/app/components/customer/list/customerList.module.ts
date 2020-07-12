import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customerList.component';

export const routes: Routes = [
  { path: '', component: CustomerListComponent },  
  { path: ':id', component: CustomerListComponent }
];

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerListModule { }