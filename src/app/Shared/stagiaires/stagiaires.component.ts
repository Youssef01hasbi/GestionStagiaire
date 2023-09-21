import {Component, OnInit} from '@angular/core';
import {StagiaireService} from "../../service/stagiairesServices/stagiaire.service";
import {Stagiaire} from "../../models/stagiaire.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Tuteur} from "../../models/tuteur.model";

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css']
})
export class StagiairesComponent implements OnInit{

  stagiaires: any[]=[];
  deleteStagiaire !: any;
  deleteId: number | null = null;

  constructor(private stagiaireService:StagiaireService) {

  }

  ngOnInit(): void {
    this.getStagiaires();
  }

  setDeleteId(id: number) {
    this.deleteId = id;
  }

  onDeleteStagiaire() {
    if (this.deleteId !== null) {
      this.stagiaireService.deleteStagiaire(this.deleteId).subscribe(
        (res) => {
          console.log(res);
          this.getStagiaires(); // Update your tuteurs list after deletion
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      this.deleteId = null; // Reset the deleteId after successful deletion
    }
  }

  getStagiaires(): void {
    this.stagiaireService.getStages().subscribe((res) => {
      console.log(res);
      this.stagiaires = res;
    })
  }




}
