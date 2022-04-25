import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccueilleComponent } from './accueille/accueille.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CompteCourentComponent } from './compte-courent/compte-courent.component';
import { CompteEpargneComponent } from './compte-epargne/compte-epargne.component';
import { OperationClientComponent } from './operation-client/operation-client.component';
import { CompteClientComponent } from './compte-client/compte-client.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CompteClientsComponent } from './compte-clients/compte-clients.component';
import { BanqueAdminComponent } from './banque-admin/banque-admin.component';
import { ClientAdminComponent } from './client-admin/client-admin.component';
import { CompteAdminComponent } from './compte-admin/compte-admin.component';
import { OperationAdminComponent } from './operation-admin/operation-admin.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilleComponent,
    RegisterClientComponent,
    ForgotPasswordComponent,
    CompteCourentComponent,
    CompteEpargneComponent,
    OperationClientComponent,
    CompteClientComponent,
    CompteClientsComponent,
    BanqueAdminComponent,
    ClientAdminComponent,
    CompteAdminComponent,
    OperationAdminComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
