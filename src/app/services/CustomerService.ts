
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../entity/Customer';
import { Token } from '@angular/compiler';

const API = `http://localhost:8080/customer`

@Injectable({ providedIn: 'root' })
export class CustomerService {
  
  constructor(private http: HttpClient) { }

  getHeader() {
    return localStorage.getItem('Token')
  }


  public getById(id: string): Observable<Customer> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<Customer>(API + "/" + id, config);
  }

  public getAll(): Observable<Customer[]> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<Customer[]>(API, config);
  }


  public create<Customer>(customer: Customer): Observable<Customer> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<Customer>(API, JSON.stringify(customer), config)
  }

  public update<Customer>(customer: Customer): Observable<Customer> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.put<Customer>(API, JSON.stringify(customer), config)
  }

  public delete(id: string) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.delete(API + "/" + id, config);
  }


}