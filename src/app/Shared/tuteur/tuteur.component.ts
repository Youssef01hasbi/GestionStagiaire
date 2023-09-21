import {Component, OnInit } from '@angular/core';
import {TuteurService} from "../../service/tuteurService/tuteur.service";
import {Tuteur} from "../../models/tuteur.model";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {OffreService} from "../../service/offreStage/offre.service";
import {Stage} from "../../models/stage.model";


@Component({
  selector: 'app-tuteur',
  templateUrl: './tuteur.component.html',
  styleUrls: ['./tuteur.component.css']
})
export class TuteurComponent implements OnInit {
  stages: any[] = [];
  tuteurs: any[] = [];
  deleteTuteur !: any;
  deleteId: number | null = null;
  updateTuteur: any | null = null;
  selectedStageId: number | null = null
  selectedTuteurId: number | null = null;
  selectedTuteur: any | null = null

  form: any = {
    username: '',
    email: '',
    password: '',
    tele: '',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private tuteurService: TuteurService, private stageService: OffreService) {
  }

  ngOnInit(): void {
    this.getTuteur();
  }

  public getStages() {
    this.stageService.getStages().subscribe((res) => {
      console.log(res);
      this.stages = res;
    })
  }

  public getTuteur(): void {
    this.tuteurService.getAllTuteur().subscribe((res) => {
      console.log(res);
      this.tuteurs = res;
    })
  }


  onAddTuteur(addForm: NgForm) {
    const formElement = document.getElementById('addTuteurForm');
    if (formElement) {
      formElement.click();
    }
    this.tuteurService.addTuteur(addForm.value).subscribe(
      (response: Tuteur) => {
        console.log(response);
        this.getTuteur();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }



  setDeleteId(id: number) {
    this.deleteId = id;
  }

  onDeleteTuteur() {
    if (this.deleteId !== null) {
      this.tuteurService.deleteTuteur(this.deleteId).subscribe(
        (res) => {
          console.log(res);
          this.getTuteur(); // Update your tuteurs list after deletion
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      this.deleteId = null; // Reset the deleteId after successful deletion
    }
  }

  onUpdate(tuteur: Tuteur) {
    this.updateTuteur = {...tuteur}; // Create a copy of the tuteur object
  }

  onUpdateTuteur(updatedTuteur: Tuteur) {
    if (this.updateTuteur) {
      this.tuteurService.updateTuteur(updatedTuteur).subscribe(
        (response: Tuteur) => {
          console.log(response);
          this.getTuteur();
          this.updateTuteur = null;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      // Reset updateTuteur after successful update
    }
  }


  openAssignModal(tuteurId: number) {
    this.selectedTuteurId = tuteurId;
    this.getStages(); // Chargez la liste des stages
    console.log('Tuteur sélectionné:', this.selectedTuteurId);
    console.log('Stage selectione:', this.selectedStageId);
  }

  assignStage() {
    if (this.selectedTuteurId !== null && this.selectedStageId !== null) {
      this.tuteurService.affecterStageTuteur(this.selectedTuteurId, this.selectedStageId)
        .subscribe(
          response => {
            console.log('Affectation réussie', response);
          },
          error => {
            console.error('Erreur lors de l\'affectation', error);
          }
        );
    } else {
      console.error('Aucun tuteur sélectionné.');
    }

  }

  viewTuteurDetails(tuteur: Tuteur) {
    this.selectedTuteur = tuteur;
    this.refreshTuteurDetails();
  }

  private refreshTuteurDetails() {
    if (this.selectedTuteur) {
      this.tuteurService.getTuteurById(this.selectedTuteur.id).subscribe(updatedTuteur => {
        this.selectedTuteur = updatedTuteur;
      });
    }
  }

  promptDelete(stageId: number) {
    const confirmDelete = confirm("Are you sure you want to delete this Encadrants?");
    if (confirmDelete) {
      if (this.selectedTuteur) {
        this.stageService.removeStageFromTuteur(this.selectedTuteur.id,stageId).subscribe(
          response => {
            console.log('Stage supprimé avec succès', response);
            this.refreshTuteurDetails();
          },
          error => {
            console.error('Erreur lors de la suppression du stage', error);
          }
        );
      }
    }
  }

  onSubmit() {
    this.tuteurService.addTuteur(this.form).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.getTuteur();
      },
      (err) => {
        console.error(err); // Log the error for debugging purposes

        if (err && err.error && err.error.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }

        this.isSignUpFailed = true;
      }
    );
  }
}
