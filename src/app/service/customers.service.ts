import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  adminEndPoint: string;

  customersEndPoint:string;

  constructor(private client : HttpClient) {
    this.customersEndPoint = environment.customersEndPoint
  }

  getAll() : Observable<Customer[]> {
    return this.client.get<Customer[]>(this.customersEndPoint);
  }

  getById(id:number):Observable<Customer>{
    return this.client.get<Customer>(`${this.customersEndPoint}/${id}`);
  }

  add(customers:Customer):Observable<Customer>{
    return this.client.post<Customer>(this.customersEndPoint,customers);
  }
  
  modify(customers:Customer):Observable<Customer>{
    return this.client.put<Customer>(this.customersEndPoint,customers);
  }

  delete(id:number):Observable<void>{
    return this.client.delete<void>(`${this.customersEndPoint}/${id}`);
  }
  
}