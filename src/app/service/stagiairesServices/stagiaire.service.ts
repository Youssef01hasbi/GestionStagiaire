import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stagiaire} from "../../models/stagiaire.model";


@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  public host:string = "http://localhost:8080"
  constructor(
    private http:HttpClient
  ) { }

  public getStages():Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>(this.host+"/stagiaires/all");
  }

  createStagiaire(stagiaire: Stagiaire): Observable<Stagiaire> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Stagiaire>(this.host+`/stagiaires/add`, stagiaire, { headers });
  }

  public getStagiaire(id:number):Observable<Stagiaire>{
    return this.http.get<Stagiaire>(this.host+"/stagiaires/find/"+id);
  }

  public deleteStagiaire(id:number):Observable<void>{
    return this.http.delete<void>(this.host+"/stagiaires/delete/"+id);
  }


}
