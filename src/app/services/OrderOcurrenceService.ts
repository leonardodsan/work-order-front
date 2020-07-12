import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { OrderOcurrence } from '../entity/OrderOcurrence';

const API = `http://localhost:8080/work-order-ocurrence`


@Injectable({ providedIn: 'root' })
export class OrderOcurrenceService {

  getHeader() {
    return localStorage.getItem('Token')
  }
  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<OrderOcurrence> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<OrderOcurrence>(API + "/" + id, config);
  }

  public getAll(): Observable<OrderOcurrence[]> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<OrderOcurrence[]>(API, config);
  }

  public getAllByOrder(id: string): Observable<OrderOcurrence[]> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<OrderOcurrence[]>(API + "/byOrder/" + id, config);
  }
  
  public create<OrderOcurrence>(workOrder: OrderOcurrence): Observable<OrderOcurrence> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<OrderOcurrence>(API, JSON.stringify(workOrder), config)
  }

  public update<OrderOcurrence>(workOrder: OrderOcurrence): Observable<OrderOcurrence> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.put<OrderOcurrence>(API, JSON.stringify(workOrder), config)
  }  
  
  public delete(id: string) {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.delete(API + "/" + id, config);
  }

}