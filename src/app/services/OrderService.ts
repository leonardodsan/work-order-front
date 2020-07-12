import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Order, Status } from '../entity/Order';
import { Professional } from '../entity/Professional';

const API = `http://localhost:8080/work-order`


@Injectable({ providedIn: 'root' })
export class OrderService {

  getHeader() {
    return localStorage.getItem('Token')
  }
  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Order> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<Order>(API + "/" + id, config);
  }

  public findByAccountable(id: string): Observable<Order[]> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<Order[]>(API + "/byAccountable/" + id, );
  }

  public getAll(): Observable<Order[]> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<Order[]>(API, config);
  }
  
  public create<Order>(workOrder: Order): Observable<Order> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<Order>(API, JSON.stringify(workOrder), config)
  }

  public update<Order>(workOrder: Order): Observable<Order> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.put<Order>(API, JSON.stringify(workOrder), config)
  }  
  
  public delete(id: string) {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.delete(API + "/" + id, config);
  }

}