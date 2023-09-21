import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {authInterceptorProviders} from "./Helepers/auth.interceptor";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { StagiairesComponent } from './Shared/stagiaires/stagiaires.component';
import { SideBarComponent } from './Shared/side-bar/side-bar.component';
import { OffreComponent } from './Shared/offre/offre.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './Shared/login/login.component';
import { RegistreComponent } from './Shared/registre/registre.component';
import { ProfilComponent } from './Shared/profil/profil/profil.component';
import { BoardAdminComponent } from './Shared/board-admin/board-admin.component';
import { BoardEncadrantComponent } from './Shared/board-encadrant/board-encadrant.component';
import { BoardStagiaireComponent } from './Shared/board-stagiaire/board-stagiaire.component';
import { HeaderComponent } from './Shared/header/header.component';
import { HomeComponent } from './Shared/home/home.component';
import {TuteurComponent} from "./Shared/tuteur/tuteur.component";
import { RegistreStagiaireComponent } from './Shared/registre-stagiaire/registre-stagiaire.component';
import { PostulerComponent } from './Shared/postuler/postuler.component';
import { MesDemandesComponent } from './Shared/mes-demandes/mes-demandes.component';
import { AllPostulerComponent } from './Shared/all-postuler/all-postuler.component';
import { StagiaireEncadrantComponent } from './Shared/stagiaire-encadrant/stagiaire-encadrant.component';
import { ListStageTuteurComponent } from './Shared/list-stage-tuteur/list-stage-tuteur.component';
import {CommonModule} from "@angular/common";




@NgModule({
  declarations: [
    AppComponent,
    StagiairesComponent,
    SideBarComponent,
    TuteurComponent,
    OffreComponent,
    LoginComponent,
    RegistreComponent,
    ProfilComponent,
    BoardAdminComponent,
    BoardEncadrantComponent,
    BoardStagiaireComponent,
    HeaderComponent,
    HomeComponent,
    RegistreStagiaireComponent,
    PostulerComponent,
    MesDemandesComponent,
    AllPostulerComponent,
    StagiaireEncadrantComponent,
    ListStageTuteurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
