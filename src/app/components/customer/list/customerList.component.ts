

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/CustomerService';
import { Customer } from 'src/app/entity/Customer';

@Component({
  selector: 'work-order-customer-list',
  templateUrl: './customerList.component.html',
  styleUrls: ['./customerList.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  public customers: Customer[] = []

  ngOnInit() {

    this.customerService.getAll()
    .subscribe(res => {this.customers = res; console.log(res)},
               err => console.log(err))

               
  }

  

}
