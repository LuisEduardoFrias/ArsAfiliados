import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Modules/Routing/app-routing.module';
import { AppComponent } from './Components/AppComponen/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MaterialModule} from './Modules/Material/material.module'

import { MenuComponent } from './Components/Menu/menu.component';
import { OptionsComponent } from './Components/Menu/options/options.component';
import { HomeComponent } from './Components/Home/home.component';

//Affiliates
import { ShowAffiliatesComponent } from './Components/Affiliates/show-affiliates/show-affiliates.component';
import { CreateAffiliateComponent } from './Components/Affiliates/create-affiliate/create-affiliate.component';
import { UpdateAffiliateComponent } from './Components/Affiliates/update-affiliate/update-affiliate.component';
import { FormAffiliateComponent } from './Components/Affiliates/form-affiliate/form-affiliate.component';

//Plans
import { ShowPlansComponent } from './Components/Plan/show-plans/show-plans.component';
import { CreatePlanComponent } from './Components/Plan/create-plan/create-plan.component';
import { UpdatePlanComponent } from './Components/Plan/update-plan/update-plan.component';
import { FormPlanComponent } from './Components/Plan/form-plan/form-plan.component';

//http
import {HttpClientModule} from '@angular/common/http';
import { ContainerComponent } from './Components/Container/container.component';
import { UpdateAmountAffiliateComponent } from './Components/Affiliates/update-amount-affiliate/update-amount-affiliate.component';

//services
import { AffiliateService } from './Services/affiliate.service';
import { PlanService } from './Services/plan.service';

// account
import { AccountComponent } from './Components/Account/account/account.component';

// login
import { LoginComponent } from './Components/login/login.component';
import { CreateComponent } from './Components/Account/create/create.component';

import { ErrorPageComponent } from './Components/error-page/error-page.component';

//branch office
import { CreateBranchOfficeComponent } from './Components/branch-offices/create-branch-office/create-branch-office.component';
import { UpdateBranchOfficeComponent } from './Components/branch-offices/update-branch-office/update-branch-office.component';
import { ShowBranchOfficeComponent } from './Components/branch-offices/show-branch-office/show-branch-office.component';
import { FormBranchOfficeComponent } from './Components/branch-offices/form-branch-office/form-branch-office.component';

import { VerificationComponent } from './Components/shared/verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OptionsComponent,
    HomeComponent,
    //affiliates
    ShowAffiliatesComponent,
    CreateAffiliateComponent,
    UpdateAffiliateComponent,
    FormAffiliateComponent,
    //plans
    ShowPlansComponent,
    CreatePlanComponent,
    UpdatePlanComponent,
    FormPlanComponent,
    //
    ContainerComponent,
    UpdateAmountAffiliateComponent,
    //login, account
    AccountComponent,
    LoginComponent,
    CreateComponent,
    //error
    ErrorPageComponent,
    //branch office
    CreateBranchOfficeComponent,
    UpdateBranchOfficeComponent,
    ShowBranchOfficeComponent,
    FormBranchOfficeComponent,
    
    VerificationComponent,

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
