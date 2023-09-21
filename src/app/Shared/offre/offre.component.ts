import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../service/offreStage/offre.service";
import {Stage} from "../../models/stage.model";
import {NgForm} from "@angular/forms";
import {Tuteur} from "../../models/tuteur.model";
import {TuteurService} from "../../service/tuteurService/tuteur.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit{
  stages: Stage[] = [];
  deleteStage !: Stage;
  deleteId: number | null = null;
  updateStage: Stage | null = null;
  photoUrl: string | ArrayBuffer | null = null;
  photoFile: File | null = null;
  selectedStage: Stage | null = null;
  TuteurView : Tuteur | null = null;


  constructor(private stageService: OffreService,private tuteurService: TuteurService) {

  }

  ngOnInit(): void {
    this.getStages();
  }

  onUpdate(stage: Stage) {
    this.updateStage = {...stage}; // Create a copy of the tuteur object
  }

  onUpdateStage(updatedStage: Stage) {
    if (this.updateStage) {
      this.stageService.updateStage(updatedStage).subscribe(
        (response: Stage) => {
          console.log(response);
          this.getStages();
          this.updateStage = null;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    }
  }

  onPhotoChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.photoFile = files[0];
    }
  }

  ajouterStage(addForm: NgForm) {
    if (addForm.valid && this.photoFile) {
      const stage: Stage = {} as Stage;
      stage.dateDebut = addForm.value.dateDebut;
      stage.dateFin = addForm.value.dateFin;
      stage.sujet = addForm.value.sujet;
      stage.description = addForm.value.description;

      const formData = new FormData();
      formData.append('stage', JSON.stringify(stage));
      formData.append('photo', this.photoFile);

      this.stageService.ajouterStage(formData).subscribe(
        (addedStage: Stage) => {
          console.log('Stage ajouté:', addedStage);
          this.getStages(); // Update your stages list after adding a new stage
          addForm.reset();
        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout du stage:', error);
          // Gérer l'erreur en conséquence
        }
      );
    }
  }

  viewStageDetails(stage: Stage) {
    this.selectedStage = stage;
    this.tuteurService.getTuteurByStageId(stage.id).subscribe(
      (tuteur: Tuteur) => {
        this.TuteurView = tuteur;
        console.log('Tuteur:', tuteur);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération du tuteur:', error);
        // Gérer l'erreur en conséquence
      }
    );
  }

  public getStages(): void {
    this.stageService.getStages().subscribe((data: any) => {
      this.stages = data;

      // Fetch and display photos for each stage
      this.stages.forEach(stage => {
        this.stageService.getStagePhoto(stage.id).subscribe(photoData => {
          const base64Data = btoa(String.fromCharCode(...new Uint8Array(photoData)));
          stage.photo = 'data:image/jpeg;base64,' + base64Data;
        });
      });
    });
  }

  setDeleteId(id: number) {
    this.deleteId = id;
  }


  onDeleteStage() {
    if (this.deleteId !== null) {
      this.stageService.deleteStage(this.deleteId).subscribe(
        (res) => {
          console.log(res);
          this.getStages(); // Update your stages list after deletion
        },
        (error: any) => {
          console.error('Erreur lors de la suppression du stage:', error);
          // Gérer l'erreur en conséquence
        }
      );
      this.deleteId = null; // Reset the deleteId after successful deletion
    }
  }
}

