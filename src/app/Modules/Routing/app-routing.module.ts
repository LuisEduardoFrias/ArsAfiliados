import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeStatusAffiliateComponent } from 'src/app/Components/Affiliates/change-status-affiliate/change-status-affiliate.component';
import { CreateAffiliateComponent } from 'src/app/Components/Affiliates/create-affiliate/create-affiliate.component';
import { ShowAffiliatesComponent } from 'src/app/Components/Affiliates/show-affiliates/show-affiliates.component';
import { UpdateAffiliateComponent } from 'src/app/Components/Affiliates/update-affiliate/update-affiliate.component';
import { UpdateAmountAffiliateComponent } from 'src/app/Components/Affiliates/update-amount-affiliate/update-amount-affiliate.component';
import { HomeComponent } from 'src/app/Components/Home/home.component';
import { ChangeStatusPlanComponent } from 'src/app/Components/Plan/change-status-plan/change-status-plan.component';
import { CreatePlanComponent } from 'src/app/Components/Plan/create-plan/create-plan.component';
import { ShowPlansComponent } from 'src/app/Components/Plan/show-plans/show-plans.component';
import { UpdatePlanComponent } from 'src/app/Components/Plan/update-plan/update-plan.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"afiliados", component:ShowAffiliatesComponent
  },
  {
    path:"afiliados/crear", component:CreateAffiliateComponent
  },
  {
    path:"afiliados/actualizar", component:UpdateAffiliateComponent
  },
  {
    path:"afiliafos/actualizar/monto", component:UpdateAmountAffiliateComponent
  },
  {
    path:"afiliados/actualizar/estado", component:ChangeStatusAffiliateComponent
  },
  {
    path:"planes", component:ShowPlansComponent
  },
  {
    path:"planes/crear", component:CreatePlanComponent
  },
  {
    path:"planes/actualizar", component:UpdatePlanComponent
  },
  {
    path:"planes/actualizar/estado", component:ChangeStatusPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
