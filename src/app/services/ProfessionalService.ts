
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professional } from '../entity/Professional';
import { Token } from '@angular/compiler';

const API = `http://localhost:8080/professional`

@Injectable({ providedIn: 'root' })
export class ProfessionalService {
  
  constructor(private http: HttpClient) { }

  getHeader() {
    return localStorage.getItem('Token')
  }


  public getById(id: string): Observable<Professional> {
    const config = {headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<Professional>(API + "/" + id, config);
  }

  public getAll(): Observable<Professional[]> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<Professional[]>(API, config);
  }


  public create<Professional>(professional: Professional): Observable<Professional> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post<Professional>(API, JSON.stringify(professional), config)
  }

  public update<Professional>(professional: Professional): Observable<Professional> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.put<Professional>(API, JSON.stringify(professional), config)
  }

  public delete(id: string) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.delete(API + "/" + id, config);
  }
}