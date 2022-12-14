import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginComponent } from './components/pages/login/login.component';

import { CompteComponent } from './components/pages/compte/compte.component';


import { OffreassuranceComponent } from './components/pages/assurance/offreassurance/offreassurance.component';
import { OffreassurancedetailComponent } from './components/pages/assurance/offreassurancedetail/offreassurancedetail.component';
import { OffreassurancelistComponent } from './components/pages/assurance/offreassurancelist/offreassurancelist.component';

import { MarcheactionsComponent } from './components/pages/marcheactions/marcheactions.component';
import {SharedModule} from './components/shared/shared.module';
import { DetailsActionComponent } from './components/pages/marcheactions/details-action/details-action.component';
import {MatTableModule, MatTabsModule} from '@angular/material';

import { AddOffreAssuranceComponent } from './components/pages/assurance/add-offre-assurance/add-offre-assurance.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { CreditLibreComponent } from './components/pages/credit-libre/credit-libre.component';
import { ComptecourantComponent } from './components/pages/comptecourant/comptecourant.component';



import { GarantieComponent } from './components/pages/garantie/garantie.component';
import { AjoutCreditLibreComponent } from './components/pages/credit-libre/ajout-credit-libre/ajout-credit-libre.component';
import { SimulateurCreditLibreComponent } from './components/pages/simulateur-credit-libre/simulateur-credit-libre.component';
import { TabAmortissementLibreComponent } from './components/pages/simulateur-credit-libre/tab-amortissement-libre/tab-amortissement-libre.component';
import { CreateCreditComponent } from './components/pages/CreditImmob/create-credit/create-credit.component';
import { ListesCreditsComponent } from './components/pages/CreditImmob/listes-credits/listes-credits.component';
import { CreditDetailComponent } from './components/pages/CreditImmob/credit-detail/credit-detail.component';

import { SimulateurCreditImmobComponent } from './components/pages/simulateur-credit-immob/simulateur-credit-immob.component';

import { TabAmorComponent } from './components/pages/simulateur-credit-immob/tab-amor/tab-amor.component';
import { ListeCreditBackComponent } from './components/pages/CreditImmob/liste-credit-back/liste-credit-back.component';
import { ListCreditsComponent } from './components/pages/CreditEtudiant/list-credits/list-credits.component';
import { ListCreditsBackComponent } from './components/pages/CreditEtudiant/list-credits-back/list-credits-back.component';
import { CreditEtuComponent } from './components/pages/CreditEtudiant/credit-etu/credit-etu.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,

    CompteComponent,

    OffreassuranceComponent,
    OffreassurancedetailComponent,
    OffreassurancelistComponent,
    MarcheactionsComponent,
    DetailsActionComponent,

    AddOffreAssuranceComponent,
    CreditLibreComponent,
 
    ComptecourantComponent,


    ComptecourantComponent,


    GarantieComponent,
    AjoutCreditLibreComponent,
    SimulateurCreditLibreComponent,
    TabAmortissementLibreComponent,
    CreateCreditComponent,
    ListesCreditsComponent,
    TabAmortissementLibreComponent,
    CreditDetailComponent,
    
    SimulateurCreditImmobComponent,
    TabAmorComponent,
    ListeCreditBackComponent,
    ListCreditsComponent,
    ListCreditsBackComponent,
    CreditEtuComponent


  ],

  imports:[
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
        MatTableModule,
        MatTabsModule,
        ReactiveFormsModule,
        AngularEditorModule 
    ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class AppModule { }
