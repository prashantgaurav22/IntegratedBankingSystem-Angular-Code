import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionEndPoint: string;



  constructor(private client : HttpClient) {
    this.transactionEndPoint = environment.transactionEndPoint
  }

  getAll() : Observable<Transaction[]> {
    return this.client.get<Transaction[]>(this.transactionEndPoint);
  }

  getByDate(from:Date,to:Date):Observable<Transaction[]> {
    return this.client.get<Transaction[]>(`${this.transactionEndPoint}/${from}/and/${to}`);
  }

  getById(id:number):Observable<Transaction>{
    return this.client.get<Transaction>(`${this.transactionEndPoint}/${id}`);
  }

  add(transactions:Transaction):Observable<Transaction>{
    return this.client.post<Transaction>(this.transactionEndPoint,transactions);
  }
  
  modify(transactions:Transaction):Observable<Transaction>{
    return this.client.put<Transaction>(this.transactionEndPoint,transactions);
  }

  delete(id:number):Observable<void>{
    return this.client.delete<void>(`${this.transactionEndPoint}/${id}`);
  }
  
}
