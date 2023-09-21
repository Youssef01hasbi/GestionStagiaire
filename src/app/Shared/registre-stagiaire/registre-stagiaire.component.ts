import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {StagiaireService} from "../../service/stagiairesServices/stagiaire.service";
import {Stagiaire} from "../../models/stagiaire.model";

@Component({
  selector: 'app-registre-stagiaire',
  templateUrl: './registre-stagiaire.component.html',
  styleUrls: ['./registre-stagiaire.component.css']
})
export class RegistreStagiaireComponent implements OnInit {

  form: any = {
    username: '',
    email: '',
    password: '',
    nom: '',
    prenom: '',
    cin: '',
    photo: '',
    dateNaissance: '',
    pathCv: '',
    niveauEtude: '',
    telephone: '',
    // Initialize other form fields here
    formation: {
      specialite: '',
      diplome: '',
      etablissment: {
        nom: ''
      }
    }
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.stagiaireService.createStagiaire(this.form).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
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
