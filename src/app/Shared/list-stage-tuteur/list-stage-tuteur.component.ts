import {Component, OnInit} from '@angular/core';
import {TuteurService} from "../../service/tuteurService/tuteur.service";

@Component({
  selector: 'app-list-stage-tuteur',
  templateUrl: './list-stage-tuteur.component.html',
  styleUrls: ['./list-stage-tuteur.component.css']
})
export class ListStageTuteurComponent implements OnInit{

    stages: any[] = [];
    idTuteur: number = 0;


    constructor(private tuteurService:TuteurService) { }

    ngOnInit(): void {
      this.getTuteurByStageId();
    }

    getTuteurByStageId() {
      const userString = localStorage.getItem('user');

      if (userString) {
        // Convertit la chaîne en objet
        const userObj = JSON.parse(userString);

        // Récupère l'ID du stagiaire
        this.idTuteur = userObj.id; // Assurez-vous que l'objet a bien une propriété 'id'
        console.log('ID du stagiaire:', this.idTuteur);
      }
      this.tuteurService.getStageByTuteurId(this.idTuteur).subscribe((data: any) => {
        this.stages = data;
      });
      }


}
