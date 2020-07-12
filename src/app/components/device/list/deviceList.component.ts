

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/entity/Device';
import { DeviceService } from 'src/app/services/DeviceService';

@Component({
  selector: 'work-order-device-list',
  templateUrl: './deviceList.component.html',
  styleUrls: ['./deviceList.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  public devices: Device[] = []

  ngOnInit() {

    this.deviceService.getAll()
    .subscribe(res => this.devices = res,
               err => console.log(err))
  }
}
