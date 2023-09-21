import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {TokenStorageService} from "../../service/token/token-storage.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false ;
  username: string | undefined;

  constructor(private tokenStorageService: TokenStorageService) { }
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

  public hasRole(role : string): boolean {
    return this.roles.includes(role);
  }



  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }


  toggleSubMenu(event: Event) {
    const target = event.target as HTMLElement;
    const listItem = target.closest('.has-submenu');

    if (listItem) {
      listItem.classList.toggle('showMenu');
    }
  }


}
