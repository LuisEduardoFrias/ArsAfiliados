import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ShowAffiliate } from 'src/app/Models/affiliate/ShowAffiliate.model';
import { AffiliateService } from 'src/app/Services/affiliate.service';

@Component({
  selector: 'app-show-affiliates',
  templateUrl: './show-affiliates.component.html',
  styleUrls: ['./show-affiliates.component.css']
})
  
export class ShowAffiliatesComponent {

  displayedColumns: string[] = ['identificationCard', 'name', 'lastName',
    'dateTime', 'nacionality', 'sex', 'socialSecurityNumber',
    'registrationDate', 'amountConsumed', 'status', 'planName',
    'coverageAmount', 'inactivate'];
  
  dataSource: ShowAffiliate[]
  
  constructor(private affiliateservice : AffiliateService) {
    
    this.ShowAffiliate();

  }

  ShowAffiliate()
  {
    this.affiliateservice.ShowAffiliate().subscribe(observable => {
      
      this.dataSource = [
      new ShowAffiliate(1,"5234345","sdf","sdfsdf",new Date(),"fasdfs","M","252352345",new Date(),223,true,8,"bxb",342),
      new ShowAffiliate(1,"5234345","sdf","sdfsdf",new Date(),"fasdfs","M","252352345",new Date(),223,true,8,"bxb",342)
      ];
      
    });

  };

  verificateDeleteRegister: boolean = false;

  VerificateDeleteRegister(respost: boolean) {
    this.verificateDeleteRegister = respost;
  }

  showComponentVerificate: boolean =true;

  DeleteRegister(id:number) {
    
    this.showComponentVerificate = true;

    if (this.verificateDeleteRegister) {
      alert("eliminado");
    }
    else {
      alert("No eliminado");
    }

  }
 
}
