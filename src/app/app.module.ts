import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Modules/Routing/app-routing.module';
import { AppComponent } from './Components/AppComponen/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MaterialModule} from './Modules/Material/material.module'

import { MenuComponent } from './Components/Menu/menu.component';
import { HomeComponent } from './Components/Home/home.component';

//Affiliates
import { ShowAffiliatesComponent } from './Components/Affiliates/show-affiliates/show-affiliates.component';
import { CreateAffiliateComponent } from './Components/Affiliates/create-affiliate/create-affiliate.component';
import { UpdateAffiliateComponent } from './Components/Affiliates/update-affiliate/update-affiliate.component';
import { ChangeStatusAffiliateComponent } from './Components/Affiliates/change-status-affiliate/change-status-affiliate.component';

//Plans
import { ShowPlansComponent } from './Components/Plan/show-plans/show-plans.component';
import { CreatePlanComponent } from './Components/Plan/create-plan/create-plan.component';
import { UpdatePlanComponent } from './Components/Plan/update-plan/update-plan.component';
import { ChangeStatusPlanComponent } from './Components/Plan/change-status-plan/change-status-plan.component';

//http
import {HttpClientModule} from '@angular/common/http';
import { ContainerComponent } from './Components/Container/container.component';
import { UpdateAmountAffiliateComponent } from './Components/Affiliates/update-amount-affiliate/update-amount-affiliate.component';
import { FormAffiliateComponent } from './Components/Affiliates/form-affiliate/form-affiliate.component';

//services
import { AffiliateService } from './Services/affiliate.service';
import { PlanService } from './Services/plan.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    //affiliates
    ShowAffiliatesComponent,
    CreateAffiliateComponent,
    UpdateAffiliateComponent,
    ChangeStatusAffiliateComponent,
    //plans
    ShowPlansComponent,
    CreatePlanComponent,
    UpdatePlanComponent,
    ChangeStatusPlanComponent,
    ContainerComponent,
    UpdateAmountAffiliateComponent,
    FormAffiliateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,

  ],
  providers: [
    //affiliates
    AffiliateService,
    //plans
    PlanService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
