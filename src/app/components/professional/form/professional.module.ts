import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { TextMaskModule } from 'angular2-text-mask';
 
export const routes: Routes = [
    { path: '', component: ProfessionalComponent },    
  { path: ':id', component: ProfessionalComponent }
  ];

  @NgModule({
    declarations: [ProfessionalComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TextMaskModule,
      RouterModule.forChild(routes),
    ]
  })
  export class ProfessionalModule { }