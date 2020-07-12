

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Device} from 'src/app/entity/Device';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalAlertService } from 'src/app/services/GlobalAlertService';
import { DeviceService } from 'src/app/services/DeviceService';

@Component({
  selector: 'work-order-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  public formGroup: FormGroup
  public router: Router
  public id

  constructor(private deviceService: DeviceService, private route: ActivatedRoute, private formBuilder: FormBuilder, private alertService: GlobalAlertService, router: Router
    ) {
      this.router = router
    }
  
  
    ngOnInit() {
      this.createForm()
      let id = this.id = this.route.snapshot.queryParamMap.get("id")
      if (id == null) {
      } else {
        this.deviceService.getById(id).subscribe(
          res => this.formGroup.patchValue(res),
          err =>  console.log(err)
        )
      }
  
    }
  
    createForm() {
      this.formGroup = this.formBuilder.group({
        alias: ['', Validators.required],
        type: [''],
        manufacturer: [''],
      });
    }
  
    saveDevice() {
      let device: Device = this.formGroup.value
      console.log(device)
      if (this.id != null) {
        device.id = this.id
        this.deviceService.update(device).subscribe(
          res => this.alertService.success("Equipamento atualizado com sucesso"),
          err => this.alertService.error("Não foi possível atualizar"),
        )
      } else {
        this.deviceService.create(device).subscribe(
          res => this.alertService.success("Equipamento criado com sucesso"),
          err => this.alertService.error("Não foi possível criar"),
        )
      }
      this.router.navigate(['/deviceList'], { relativeTo: this.route })
    }

}
