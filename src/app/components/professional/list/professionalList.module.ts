import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalListComponent } from './professionalList.component';

export const routes: Routes = [
  { path: '', component: ProfessionalListComponent },  
  { path: ':id', component: ProfessionalListComponent }
];

@NgModule({
  declarations: [ProfessionalListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfessionalListModule { }