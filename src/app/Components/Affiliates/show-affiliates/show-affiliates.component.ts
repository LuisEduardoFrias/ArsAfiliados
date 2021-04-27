import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Affiliate } from 'src/app/Models/affiliate.model';

@Component({
  selector: 'app-show-affiliates',
  templateUrl: './show-affiliates.component.html',
  styleUrls: ['./show-affiliates.component.css']
})
  
export class ShowAffiliatesComponent implements AfterViewInit {

  /*Affiliates = [new ShowAffiliate(1, "12738273827","Juan1","Peres1",
    new Date(2021, 4, null, null, null, null, null), "tal lugar1", "M",
    "83758473", new Date(2021, 4, null, null, null, null, null), 0, true, 1,"X",200),

    new ShowAffiliate(2, "12738273827","Juan2","Pere22",
    new Date(2021, 4, null, null, null, null, null), "tal lugar2", "M",
    "83758473", new Date(2021, 4, null, null, null, null, null), 0, true, 2,"MAX",200),

    new ShowAffiliate(3, "12738273827","Juan3","Peres3",
    new Date(2021, 4, null, null, null, null, null), "tal lugar2", "M",
    "83758473", new Date(2021, 4, null, null, null, null, null), 0, true, 4,"X MAX",200),

    new ShowAffiliate(4, "12738273827","Juan4","Peres4",
    new Date(2021, 4, null, null, null, null, null), "tal lugar3", "M",
    "83758473", new Date(2021, 4, null, null, null, null, null), 0, true, 3,"PLUS",200)
  ]*/

  displayedColumns: string[] = ['id', 'identificationCard', 'name', 'lastName',
    'dateTime', 'nacionality', 'sex', 'socialSecurityNumber',
    'registrationDate', 'amountConsumed', 'status', 'planName',
    'montoCobertura'];
  
  dataSource: MatTableDataSource<Affiliate>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const Affiliates = Array.from({length: 100}, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(Affiliates);
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

  createNewUser(id: number): Affiliate
  {
    return new Affiliate(id, "12738273827", "Juan1", "Peres1",
      new Date(2021, 4, null, null, null, null, null), "tal lugar1", "M",
      "83758473", new Date(2021, 4, null, null, null, null, null), 0, true, 1, "X", 200);
  };

}
