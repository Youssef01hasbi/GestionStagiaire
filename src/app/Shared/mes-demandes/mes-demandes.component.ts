import {Component, OnInit} from '@angular/core';
import {PostulezService} from "../../service/Postulez/postulez.service";

@Component({
  selector: 'app-mes-demandes',
  templateUrl: './mes-demandes.component.html',
  styleUrls: ['./mes-demandes.component.css']
})
export class MesDemandesComponent implements OnInit{

  idStagiaire: number = 0;
  postulations: any[] = [];
  deleteId: number | null = null;

  constructor(private postulerService:PostulezService) { }

  ngOnInit(): void {
    this.getPostulationsStagiaire();
  }

  getPostulationsStagiaire() {
    const userString = localStorage.getItem('user');

    if (userString) {
      // Convertit la chaîne en objet
      const userObj = JSON.parse(userString);

      // Récupère l'ID du stagiaire
      this.idStagiaire = userObj.id; // Assurez-vous que l'objet a bien une propriété 'id'
      console.log('ID du stagiaire:', this.idStagiaire);
    }
    this.postulerService.getStagiairePostulerById(this.idStagiaire).subscribe((data: any) => {
      this.postulations = data;
    });

  }

  setDeleteId(id: number) {
    this.deleteId = id;
  }


  onCancelPostuler() {
    if (this.deleteId !== null) {
      this.postulerService.CancelPostuler(this.deleteId).subscribe(() => {
        this.getPostulationsStagiaire();
      });
    }
  }
}
