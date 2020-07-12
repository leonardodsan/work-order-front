import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Device } from '../entity/Device';

const API = `http://localhost:8080/device`


@Injectable({ providedIn: 'root' })
export class DeviceService {

  getHeader() {
    return localStorage.getItem('Token')
  }
  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Device> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<Device>(API + "/" + id, config);
  }

  public getAll(): Observable<Device[]> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.get<Device[]>(API, config);
  }
  
  public create<Device>(device: Device): Observable<Device> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<Device>(API, JSON.stringify(device), config)
  }

  public update<Device>(device: Device): Observable<Device> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.put<Device>(API, JSON.stringify(device), config)
  }  
  
  public delete(id: string) {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    // const config = { headers: new HttpHeaders().set('Authorization', this.getHeader()).set('Content-Type', 'application/json') };
    return this.http.delete(API + "/" + id, config);
  }

}