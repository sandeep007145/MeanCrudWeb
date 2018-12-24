import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

public url = 'http://localhost:4000/employess'

  constructor(
    private httpClient: HttpClient
  ) { }

  createEmployee(data): Observable<any> {
    return this.httpClient.post(this.url, data);
  }

  getEmployee(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
