import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAffiliateComponent } from 'src/app/Components/Affiliates/create-affiliate/create-affiliate.component';
import { ShowAffiliatesComponent } from 'src/app/Components/Affiliates/show-affiliates/show-affiliates.component';
import { UpdateAffiliateComponent } from 'src/app/Components/Affiliates/update-affiliate/update-affiliate.component';
import { UpdateAmountAffiliateComponent } from 'src/app/Components/Affiliates/update-amount-affiliate/update-amount-affiliate.component';
import { HomeComponent } from 'src/app/Components/Home/home.component';
import { CreatePlanComponent } from 'src/app/Components/Plan/create-plan/create-plan.component';
import { ShowPlansComponent } from 'src/app/Components/Plan/show-plans/show-plans.component';
import { UpdatePlanComponent } from 'src/app/Components/Plan/update-plan/update-plan.component';
import { CreateComponent } from 'src/app/Components/Account/create/create.component';
import { LoginComponent } from 'src/app/Components/login/login.component';
import { AuthGuard } from 'src/app/Components/shared/guards/auth.guard'
import { ErrorPageComponent } from 'src/app/Components/error-page/error-page.component';
import { ShowBranchOffice } from 'src/app/Models/branchoffice/ShowBranchOffice.model';
import { CreateBranchOffice } from 'src/app/Models/branchoffice/CreateBranchOffice.model';
import { UpdateBranchOffice } from 'src/app/Models/branchoffice/UpdateBranchOffice.model';

const routes: Routes = [
  {
    path:"", component:HomeComponent, canActivate:[AuthGuard]
  },
  {
    path:"afiliados", component:ShowAffiliatesComponent, canActivate:[AuthGuard]
  },
  {
    path:"afiliados/crear", component:CreateAffiliateComponent, canActivate:[AuthGuard]
  },
  {
    path:"afiliados/actualizar", component:UpdateAffiliateComponent, canActivate:[AuthGuard]
  },
  {
    path:"afiliados/actualizar/monto", component:UpdateAmountAffiliateComponent, canActivate:[AuthGuard]
  },
  {
    path:"planes", component:ShowPlansComponent, canActivate:[AuthGuard]
  },
  {
    path:"planes/crear", component:CreatePlanComponent, canActivate:[AuthGuard]
  },
  {
    path:"planes/actualizar", component:UpdatePlanComponent, canActivate:[AuthGuard]
  },
  {
    path:"account/create", component: CreateComponent, canActivate:[AuthGuard]
  },
  {
    path: "account/login", component: LoginComponent
  },
  {
    path:"sucursales", component : ShowBranchOffice, canActivate:[AuthGuard]
  },
  {
    path: "sucursales/crear", component : CreateBranchOffice, canActivate:[AuthGuard]
  },
  {
    path: "sucursales/actualizar", component : UpdateBranchOffice, canActivate:[AuthGuard]
  },
  {
    path: "**", component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
