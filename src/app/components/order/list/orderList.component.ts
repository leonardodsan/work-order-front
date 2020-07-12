import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/OrderService';
import { Order, Status } from 'src/app/entity/Order';

import { ProfessionalService } from 'src/app/services/ProfessionalService';
import { Professional } from 'src/app/entity/Professional';

@Component({
  selector: 'order-service-list',
  templateUrl: './orderList.component.html',
  styleUrls: ['./orderList.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private orderService: OrderService, private professionalService: ProfessionalService, private formBuilder: FormBuilder) { }

  public formGroup: FormGroup

  public orders: Order[] = []
  public accountables: Professional[] = []

  public accountable: string


  ngOnInit() {
    this.createForm()
    this.searchAllOrders()
    this.professionalService.getAll().subscribe(
      res => this.accountables = res,
      err => console.log(err)
    )
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      accountable: [''],
    });
  }

  searchAllOrders() {
    this.orderService.getAll().subscribe(
      res => this.orders = res,
      err => console.log(err)
    )
  }
  searchOrder(){
    let accountable = this.formGroup.value.accountable
    console.log(accountable)
    if(accountable){
      this.orderService.findByAccountable(accountable)
      .subscribe(
        res => this.orders = res,
        err => console.log(err))
    } else {
      this.searchAllOrders()
    }
 
  }
}

