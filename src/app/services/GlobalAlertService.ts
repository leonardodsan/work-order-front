import { Injectable, ElementRef } from "@angular/core";
import { Subject, Observable } from "rxjs";

export enum AlertType { SUCCESS, ERROR, INFO, WARNING };

export class Alert { type: AlertType; message: string; timeout?: any; }

declare var $: any;
  
@Injectable({ providedIn: 'root' })
export class GlobalAlertService {

  private subject = new Subject<Alert>();

  public alerts(): Observable<Alert> {
    return this.subject.asObservable();
  }

  public success(message: string) {
    this.emit(AlertType.SUCCESS, message);
  }

  public error(message: string) {
    this.emit(AlertType.ERROR, message);
  }

  public info(message: string) {
    this.emit(AlertType.INFO, message);
  }

  public warning(message: string) {
    this.emit(AlertType.WARNING, message);
  }

  private emit(type: AlertType, message: string) {
    this.subject.next({ type: type, message: message });
  }

 
}