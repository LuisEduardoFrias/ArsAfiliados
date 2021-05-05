import { Component, OnInit } from '@angular/core';
import { CreateAffiliate } from '../../../Models/affiliate/CreateAffiliate.model';
import { AffiliateService } from '../../../Services/affiliate.service';


@Component({
  selector: 'app-create-affiliate',
  templateUrl: './create-affiliate.component.html',
  styleUrls: ['./create-affiliate.component.css']
})
export class CreateAffiliateComponent implements OnInit {

  constructor(private affiliateservices: AffiliateService) { }
    
  ngOnInit(): void {

  }

  CreateAffiliate(affiliate: CreateAffiliate) {
    
    this.affiliateservices.CreateAffiliate(affiliate).subscribe(observer =>
    {

      debugger;
      console.log(observer);

     } )

  }
}
