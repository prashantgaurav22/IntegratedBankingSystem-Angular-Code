import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Beneficiary } from '../model/beneficiary';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

 
  beneficiaryEndPoint:string;

  constructor(private client : HttpClient) {
    this.beneficiaryEndPoint = environment.beneficiaryEndPoint
  }

  getAll() : Observable<Beneficiary[]> {
    return this.client.get<Beneficiary[]>(this.beneficiaryEndPoint);
  }

  getById(id:number):Observable<Beneficiary>{
    return this.client.get<Beneficiary>(`${this.beneficiaryEndPoint}/${id}`);
  }

  add(beneficiarys:Beneficiary):Observable<Beneficiary>{
    return this.client.post<Beneficiary>(this.beneficiaryEndPoint,beneficiarys);
  }
  
  modify(beneficiarys:Beneficiary):Observable<Beneficiary>{
    return this.client.put<Beneficiary>(this.beneficiaryEndPoint,beneficiarys);
  }

  delete(id:number):Observable<void>{
    return this.client.delete<void>(`${this.beneficiaryEndPoint}/${id}`);
  }
  
}
