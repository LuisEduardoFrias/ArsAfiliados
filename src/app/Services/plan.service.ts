import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Plan } from "../Models/plan.model";
import { HttpService } from "./http-service";

@Injectable({
  providedIn: 'root'    
})
export class PlanService extends HttpService  {

    constructor(private httpclien : HttpClient) {
        super();
    }

    GetPlans() : Observable<Plan[]> {

        return this.httpclien.get<Plan[]>(`${this.apiUrl}/api/plan`, {
          headers: {"Accept": "application/vnd.arsaffiliate.get.plans+json" }
        })

    }
}
