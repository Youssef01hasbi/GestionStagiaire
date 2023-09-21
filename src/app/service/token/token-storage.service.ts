import { Injectable } from '@angular/core';
import {User} from "../../models/user.model";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    console.log("save token");
  }

  public getToken(): string | null {
    const token = sessionStorage.getItem(TOKEN_KEY);
    console.log("get token");
    return token != null ? token : null;
  }


  public saveUser(user:User) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log("save user");
  }

  public getUser() {
    const userString = sessionStorage.getItem(USER_KEY);
    if (userString != null) {
      return JSON.parse(userString);
      console.log("get user");
    }
    return null;
  }

}
