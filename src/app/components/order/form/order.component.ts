import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';

import { CustomerService } from 'src/app/services/CustomerService';
import { DeviceService } from 'src/app/services/DeviceService';
import { ProfessionalService } from 'src/app/services/ProfessionalService';
import { OrderOcurrenceService } from 'src/app/services/OrderOcurrenceService';
import { Customer } from 'src/app/entity/Customer';
import { Professional } from 'src/app/entity/Professional';
import { Device } from 'src/app/entity/Device';
import { OrderOcurrence } from 'src/app/entity/OrderOcurrence';

import { OrderService } from 'src/app/services/OrderService';
import { Order } from 'src/app/entity/Order';

@Component({
  selector: 'order-service-new',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public formGroup: FormGroup
  public router: Router
  public id: string
  public customers: Customer[] = []
  public devices: Device[] = []
  public accountables: Professional[] = []
  public ocurrences: OrderOcurrence[] = []
  public editing = true
  public pageTitle: string

  constructor(private orderService: OrderService, private route: ActivatedRoute, private formBuilder: FormBuilder, private customerService: CustomerService, private deviceService: DeviceService, private professionalService: ProfessionalService , private ocurrencesService: OrderOcurrenceService, private alertService: GlobalAlertService, router: Router
    ) {
      this.router = router
    }
  
    ngOnInit() {
      this.createForm()

      this.customerService.getAll().subscribe(
        res => this.customers = res,
        err => console.log(err)
      )

      this.deviceService.getAll().subscribe(
        res => this.devices = res,
        err => console.log(err)
      )

      this.professionalService.getAll().subscribe(
        res => this.accountables = res,
        err => console.log(err)
      )

      let id = this.id = this.route.snapshot.queryParamMap.get("id")
      if (id == null) {
        this.editing = false
        this.pageTitle = 'Nova ordem de serviço'
      } else {
        this.editing = true
        this.pageTitle = 'Editar ordem de serviço'
        this.orderService.getById(id).subscribe(
          res => {this.formGroup.patchValue(res); console.log(res)}
        )
      }

      this.ocurrencesService.getAllByOrder(this.id).subscribe(
        res => this.ocurrences = res,
        err => console.log(err)
      )
  
    }

  createForm() {
    
    this.formGroup = this.formBuilder.group({
      customer: ['', Validators.required],
      device: ['', Validators.required],
      accountable: ['', Validators.required],
      problem: ['', Validators.required],
      status: ['']
    });
  }

  saveOrder() {
    let order: Order = this.formGroup.value
    console.log(order)
    if (this.id != null) {
      order.id = this.id
      console.log(order)
      this.orderService.update(order).subscribe(
        res => this.alertService.success("Ordem de serviço atualizada com sucesso"),
        err => console.log(err),
      )
    } else {
      this.orderService.create(order).subscribe(
        res => this.alertService.success("Ordem de serviço gerada com sucesso"),
        err => this.alertService.error("Não foi possível salvar"),
      )
    }
   this.router.navigate(['/orderList'], { relativeTo: this.route })
  }

  isEditing() {
    return this.editing;
  }

}