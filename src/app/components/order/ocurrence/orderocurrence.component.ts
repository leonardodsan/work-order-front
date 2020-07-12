

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';
import { OrderOcurrence } from 'src/app/entity/OrderOcurrence';
import { OrderOcurrenceService } from 'src/app/services/OrderOcurrenceService';

@Component({
  selector: 'work-order-ocurrence',
  templateUrl: './orderocurrence.component.html',
  styleUrls: ['./orderocurrence.component.css']
})
export class OrderOcurrenceComponent implements OnInit {

  public formGroup: FormGroup
  public router: Router

  constructor(private service: OrderOcurrenceService, private route: ActivatedRoute, private formBuilder: FormBuilder, private alertService: GlobalAlertService, router: Router
    ) {
      this.router = router
    }
  
  
    ngOnInit() {
      this.createForm()
      let id = this.route.snapshot.queryParamMap.get("id")
      this.formGroup.patchValue({workOrder: {id: id}})
      console.log(this.formGroup.value)
    }
  
    createForm() {
      this.formGroup = this.formBuilder.group({
        description: ['', Validators.required],
        workOrder: ['']
      });
    }
  
    save() {
      let ocurrence: OrderOcurrence = this.formGroup.value
      console.log(ocurrence)
      this.service.create(ocurrence).subscribe(
        res => this.alertService.success("Ocorrência gerada com sucesso"),
        err => this.alertService.error("Não foi possível criar"),
      )
      this.router.navigate(['/orderList'], { relativeTo: this.route })
    }

}
