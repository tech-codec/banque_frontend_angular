import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AccueilleComponent} from "./accueille/accueille.component";
import {RegisterClientComponent} from "./register-client/register-client.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {CompteCourentComponent} from "./compte-courent/compte-courent.component";
import {CompteEpargneComponent} from "./compte-epargne/compte-epargne.component";
import {OperationClientComponent} from "./operation-client/operation-client.component";
import {CompteClientComponent} from "./compte-client/compte-client.component";
import {BanqueAdminComponent} from "./banque-admin/banque-admin.component";
import {ClientAdminComponent} from "./client-admin/client-admin.component";
import {CompteAdminComponent} from "./compte-admin/compte-admin.component";
import {OperationAdminComponent} from "./operation-admin/operation-admin.component";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"accueille/:id",component:AccueilleComponent,children:[
      {path:"operation-client",component:OperationClientComponent},
      {path:"compte-client",component:CompteClientComponent}
    ]},
  {path:"register",component:RegisterClientComponent},
  {path:"forgot-password", component:ForgotPasswordComponent},
  {path:"accueille",component:AccueilleComponent},
  {path:"admin/:id",component:BanqueAdminComponent,children:[
      {path:"client-admin",component:ClientAdminComponent},
      {path:"compte-admin",component:CompteAdminComponent},
      {path:"operation-admin",component:OperationAdminComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
