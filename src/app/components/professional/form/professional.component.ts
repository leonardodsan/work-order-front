

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfessionalService } from 'src/app/services/ProfessionalService';
import { Professional } from 'src/app/entity/Professional';

@Component({
  selector: 'work-order-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {


  public formGroup: FormGroup
  public maskPhone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public id: string
  public router: Router

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private professionalService: ProfessionalService, private alertService: GlobalAlertService, router: Router
  ) {
    this.router = router
  }

  ngOnInit() {
    this.createForm()
    let id = this.id = this.route.snapshot.queryParamMap.get("id")
    if (id == null) {
    } else {
      this.professionalService.getById(id).subscribe(
        res => this.formGroup.patchValue(res),
        err =>  console.log(err)
      )
    }

  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      profession: [''],
    });
  }

  saveProfessional() {
    let professional: Professional = this.formGroup.value
    console.log(professional)
    if (this.id != null) {
      professional.id = this.id
      this.professionalService.update(professional).subscribe(
        res => this.alertService.success("Profissional atualizado com sucesso"),
        err => this.alertService.error("Não foi possível atualizar"),
      )
    } else {
      this.professionalService.create(professional).subscribe(
        res => this.alertService.success("Profissional criado com sucesso"),
        err => this.alertService.error("Não foi possível criar"),
      )
    }
    this.router.navigate(['/professionalList'], { relativeTo: this.route })
  }
}
