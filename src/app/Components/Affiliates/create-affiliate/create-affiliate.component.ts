import { Component, OnInit } from '@angular/core';
import { Affiliate } from 'src/app/Models/affiliate.model';


@Component({
  selector: 'app-create-affiliate',
  templateUrl: './create-affiliate.component.html',
  styleUrls: ['./create-affiliate.component.css']
})
export class CreateAffiliateComponent implements OnInit {

  constructor() { }
    
  ngOnInit(): void {

  }

  CreateAffiliate(affiliate:Affiliate){
  
    console.log(affiliate);

  }
}
