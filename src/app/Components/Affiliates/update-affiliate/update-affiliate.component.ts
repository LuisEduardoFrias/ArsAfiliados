import { Component, OnInit } from '@angular/core';
import { UpdateAffiliate } from 'src/app/Models/affiliate/UpdateAffiliate.model';

@Component({
  selector: 'app-update-affiliate',
  templateUrl: './update-affiliate.component.html',
  styleUrls: ['./update-affiliate.component.css']
})
export class UpdateAffiliateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  UpdateAffiliate(affiliate: UpdateAffiliate){
    console.log(affiliate);

  }

}
