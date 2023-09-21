import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../service/token/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false ;
  username: string | undefined;


  showAdminBoard = false;
  showEncadrantBoard = false;



  constructor(private tokenStorageService: TokenStorageService,private router:Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      /*this.showAdminBoard = this.roles.includes('ROLE_Admin');
      this.showEncadrantBoard = this.roles.includes('ROLE_Encadrant');*/

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }
}
