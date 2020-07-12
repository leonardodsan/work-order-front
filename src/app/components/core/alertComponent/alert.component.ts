import { Component, OnInit, OnDestroy } from "@angular/core";
import { GlobalAlertService, Alert, AlertType } from 'src/app/services/GlobalAlertService';
import { Subscription } from "rxjs";

@Component({
  selector: 'alert',
  templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {

  public alerts: Alert[] = [];
  private alertSubscription: Subscription;

  constructor(private service: GlobalAlertService) {}

  public ngOnInit(): void {
    this.alertSubscription = this.service.alerts().subscribe((alert) => this.activate(alert));
  } 

  public dismiss(alert) {
    clearTimeout(alert.timeout);
    this.alerts = this.alerts.filter(a => a != alert);
  }

  public css(alert: Alert) {
    switch (alert.type) {
      case AlertType.SUCCESS: return 'alert-success';
      case AlertType.ERROR: return 'alert-danger';
      case AlertType.INFO: return 'alert-info';
      case AlertType.WARNING: return 'alert-warning';
    }
  }

  private activate(alert: Alert) {
    alert.timeout = setTimeout(() => this.dismiss(alert), alert.type == 3 ? 8000 : 2500);
    this.alerts.push(alert);
  }

  public ngOnDestroy(): void {
    if (this.alertSubscription) { this.alertSubscription.unsubscribe(); }
  }
}
