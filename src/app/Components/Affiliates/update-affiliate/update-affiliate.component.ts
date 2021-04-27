import { Component, OnInit } from '@angular/core';
import { Affiliate } from 'src/app/Models/affiliate.model';

@Component({
  selector: 'app-update-affiliate',
  templateUrl: './update-affiliate.component.html',
  styleUrls: ['./update-affiliate.component.css']
})
export class UpdateAffiliateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  UpdateAffiliate(affiliate: Affiliate){
  
    console.log(affiliate);

  }

}
