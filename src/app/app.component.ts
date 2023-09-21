import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./service/token/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'stage-front-web';

  constructor() {
  }


  ngOnInit(): void {

  }

}
