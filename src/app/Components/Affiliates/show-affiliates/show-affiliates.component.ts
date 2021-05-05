import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ShowAffiliate } from '../../../Models/affiliate/ShowAffiliate.model';
import { AffiliateService } from '../../../Services/affiliate.service';
import { Subject } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-show-affiliates',
  templateUrl: './show-affiliates.component.html',
  styleUrls: ['./show-affiliates.component.css'],
  providers: [DatePipe]
})
  
export class ShowAffiliatesComponent implements AfterViewInit {

  public displayedColumns: string[] = ['id','identificationCard', 'name', 'lastName',
    'dateTime', 'nacionality', 'sex', 'socialSecurityNumber',
    'registrationDate', 'amountConsumed', 'status', 'planId', 'planName',
    'coverageAmount', 'inactivate', 'update', 'updateAmount'];
  
  public dataSource: MatTableDataSource<ShowAffiliate>;
  public showComponentVerificate: boolean = false;

  private showAffiliate: ShowAffiliate[];
  private deleteSubject : Subject<Boolean> = new Subject();
  private navigationExtras: NavigationExtras;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor( private affiliateService: AffiliateService, private router : Router ) 
  {
    this.affiliateService.GetAllAffiliate().subscribe(observer => {
     // observer;
      this.showAffiliate = [ 
       new ShowAffiliate(1,"luis1","eduard","adsg", null, "asdg", "asg","asdg", null,1200,true,1,"ds",3212)
      ,new ShowAffiliate(2,"luis2","eduard","adsg", null, "asdg", "asg","asdg", null,1200,true,1,"ds",3212)
      ,new ShowAffiliate(3,"luis3","eduard","adsg", null, "asdg", "asg","asdg", null,1200,true,1,"ds",3212)
      ,new ShowAffiliate(4,"luis4","eduard","adsg", null, "asdg", "asg","asdg", null,1200,true,1,"ds",3212)
      ,new ShowAffiliate(5,"luis5","eduard","adsg", null, "asdg", "asg","asdg", null,1200,true,1,"ds",3212)
      ,new ShowAffiliate(6,"luis6","eduard","adsg", null, "asdg", "asg","asdg", null,1200,true,1,"ds",3212)
      ,new ShowAffiliate(7,"luis7","eduard","adsg", null, "asdg", "asg","asdg", null,1200,true,1,"ds",3212)
    ];

      this.dataSource = new MatTableDataSource(this.showAffiliate);
    })
  }


  VerificateChangeStatusRegister(respost: boolean) {

    this.showComponentVerificate = false;

    this.deleteSubject.next(respost);

  }


  ChangeStatusRegister(identity:string,status:boolean) {
    
    this.showComponentVerificate = true;

    this.deleteSubject.subscribe(observer => {

      debugger;

      this.showComponentVerificate = false;

      if (observer) 
      {
        this.affiliateService.ChangeStatus(identity,status).subscribe(observer => 
        {
            alert("Registro desactivado");
        }, error => alert("Error al desactivar este registro."));

      }
    })
  
  }
 

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  Update(id: number)
  {
    this.Navegate(id, 'afiliados/actualizar');
  }


  UpdateAmount(id: number)
  {
    this.Navegate(id, 'afiliados/actualizar/monto');
  }


  Navegate(id: number, url: string)
  {
    this.showAffiliate[id];

    this.navigationExtras = {
      state: {
       showAffiliate: this.showAffiliate[id]
      }
    }

    this.router.navigate([url], this.navigationExtras );
  }


}
