import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StagiairesComponent} from "./Shared/stagiaires/stagiaires.component";
import {SideBarComponent} from "./Shared/side-bar/side-bar.component";
import {TuteurComponent} from "./Shared/tuteur/tuteur.component";
import {OffreComponent} from "./Shared/offre/offre.component";
import {LoginComponent} from "./Shared/login/login.component";
import {RegistreComponent} from "./Shared/registre/registre.component";
import {BoardAdminComponent} from "./Shared/board-admin/board-admin.component";
import {BoardStagiaireComponent} from "./Shared/board-stagiaire/board-stagiaire.component";
import {BoardEncadrantComponent} from "./Shared/board-encadrant/board-encadrant.component";
import {ProfilComponent} from "./Shared/profil/profil/profil.component";
import {HomeComponent} from "./Shared/home/home.component";
import {RegistreStagiaireComponent} from "./Shared/registre-stagiaire/registre-stagiaire.component";
import {PostulerComponent} from "./Shared/postuler/postuler.component";
import {MesDemandesComponent} from "./Shared/mes-demandes/mes-demandes.component";
import {AllPostulerComponent} from "./Shared/all-postuler/all-postuler.component";
import {StagiaireEncadrantComponent} from "./Shared/stagiaire-encadrant/stagiaire-encadrant.component";
import {ListStageTuteurComponent} from "./Shared/list-stage-tuteur/list-stage-tuteur.component";




const routes: Routes = [
  {path:'sideBar',component:SideBarComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'stagiaire',component:StagiairesComponent},
  {path:'List-stag',component:StagiairesComponent},
  {path:'tuteur',component:TuteurComponent},
  {path:'addOffre',component:OffreComponent},
  {path:"login",component:LoginComponent},
  {path:"registre",component:RegistreComponent},
  {path:'admin', component: BoardAdminComponent },
  {path:'stagairy',component:BoardStagiaireComponent},
  {path:'encadrant',component:BoardEncadrantComponent},
  {path:'profile', component: ProfilComponent },
  {path:'home',component:HomeComponent},
  {path:'registreStagiaire',component:RegistreStagiaireComponent},
  {path: 'postuler/:id', component: PostulerComponent },
  {path:'mesDemandes',component:MesDemandesComponent},
  {path:'allPostuler',component:AllPostulerComponent},
  {path:'stagiaireEncadrant',component:StagiaireEncadrantComponent},
  {path:'listStage',component:ListStageTuteurComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
