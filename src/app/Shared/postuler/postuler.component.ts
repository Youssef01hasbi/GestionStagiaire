import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OffreService} from "../../service/offreStage/offre.service";
import {PostulezService} from "../../service/Postulez/postulez.service";

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent {

  stage:any;
  stageId: number = 0;
  idStagiaire: number = 0;

  constructor(private route: ActivatedRoute,private offreStage:OffreService,
              private postulerService:PostulezService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.stageId = +id;
      this.offreStage.getStageById(this.stageId).subscribe((data: any) => {
        this.stage = data;
        this.offreStage.getStagePhoto(this.stageId).subscribe(photoData => {
          const base64Data = btoa(String.fromCharCode(...new Uint8Array(photoData)));
          this.stage.photo = 'data:image/jpeg;base64,' + base64Data;
        });
      });
    } else {
      // Gérer le cas où id est null (par exemple, rediriger l'utilisateur ou afficher une erreur)
    }
    const userString = localStorage.getItem('user');

    if (userString) {
      // Convertit la chaîne en objet
      const userObj = JSON.parse(userString);

      // Récupère l'ID du stagiaire
      this.idStagiaire = userObj.id; // Assurez-vous que l'objet a bien une propriété 'id'
      console.log('ID du stagiaire:', this.idStagiaire);
    }
  }


  postulerNow(){
    this.postulerService.postulerPourStage(this.idStagiaire, this.stageId).subscribe(
      (success: boolean) => {
        if (success) {
          window.alert('Postulation réussie');
        } else {
          window.alert('Échec de la postulation');
        }
      },
      error => {
        // Gérer l'erreur
        console.log('Une erreur s\'est produite', error);
      }
    );
  }
}
