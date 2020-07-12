

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from 'src/app/services/ProfessionalService';
import { Professional } from 'src/app/entity/Professional';

@Component({
  selector: 'work-order-professional-list',
  templateUrl: './professionalList.component.html',
  styleUrls: ['./professionalList.component.css']
})
export class ProfessionalListComponent implements OnInit {

  constructor(private professionalService: ProfessionalService) { }

  public professionals: Professional[] = []

  ngOnInit() {

    this.professionalService.getAll()
    .subscribe(res => {this.professionals = res; console.log(res)},
               err => console.log(err))

               
  }

  

}
