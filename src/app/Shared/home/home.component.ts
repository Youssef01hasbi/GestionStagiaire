import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {Stage} from "../../models/stage.model";
import {OffreService} from "../../service/offreStage/offre.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stages: Stage[] = [];
  content: string | undefined;

  constructor(private offreStage:OffreService,private userService: UserService) { }

  ngOnInit() {
    this.getStages();
    /*this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
  }

  public getStages(): void {
    this.offreStage.getStages().subscribe((data: any) => {
      this.stages = data;

      // Fetch and display photos for each stage
      this.stages.forEach(stage => {
        this.offreStage.getStagePhoto(stage.id).subscribe(photoData => {
          const base64Data = btoa(String.fromCharCode(...new Uint8Array(photoData)));
          stage.photo = 'data:image/jpeg;base64,' + base64Data;
        });
      });
    });
  }
}
