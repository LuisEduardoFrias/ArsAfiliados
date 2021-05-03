import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateAffiliate } from '../Models/affiliate/CreateAffiliate.model';
import { ShowAffiliate } from '../Models/affiliate/ShowAffiliate.model';
import { UpdateAffiliate } from '../Models/affiliate/UpdateAffiliate.model';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root'
})
export class AffiliateService extends HttpService{

    constructor(private httpclien : HttpClient) {
        super();
    }
  
  ShowAffiliate(): Observable<ShowAffiliate[]>{
    return this.httpclien.get<ShowAffiliate[]>(`${this.apiUrl}api/affiliate/`,
      { headers: { "Accept": "application/vnd.arsaffiliate.ado.get.affiliates+json" } });
  }


  SearchAffiliate(search:string): Observable<ShowAffiliate[]> {
    return this.httpclien.get<ShowAffiliate[]>(`${this.apiUrl}api/affiliate/${search}`,
      { headers: { "Accept": "application/vnd.arsaffiliate.ado.get.seach.affiliate+json" } });
  }
  
  
  CreateAffiliate(affiliate: CreateAffiliate) : Observable<any> {
    return this.httpclien.post(`${this.apiUrl}api/affiliate`,
      affiliate,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.create.affiliate+json" } });
  }

  UpdateAffiliate(affiliate: UpdateAffiliate) {
    return this.httpclien.put(`${this.apiUrl}api/affiliate/`,
      affiliate,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.update.affiliate+json" } });
  }

  UpdateAmountAffiliate() {
        return this.httpclien.put(`${this.apiUrl}api/affiliate/`,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.update.amonunt.affiliate+json" } });
  }

  ChangeStatus(identity:string,status:boolean) {
        return this.httpclien.patch(`${this.apiUrl}api/plan/${identity}&${status}`,
      { headers: { "Content-Type": "application/vnd.arsaffiliate.ado.changestatus.affiliate+json" } });
  }
  
}
