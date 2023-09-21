import { Component } from '@angular/core';
import {TokenStorageService} from "../../../service/token/token-storage.service";
import {StagiaireService} from "../../../service/stagiairesServices/stagiaire.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  currentUser: any;
  stagiaire: any;


  constructor(private token: TokenStorageService,private profile : StagiaireService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.getProfileConnect();
  }

  getProfileConnect(): void {
    this.profile.getStagiaire(this.currentUser.id).subscribe(
      data => {
        this.stagiaire = data;
      }
    )
  }
}
