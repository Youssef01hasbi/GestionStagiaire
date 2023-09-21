import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tuteur} from "../../models/tuteur.model";
import {Stagiaire} from "../../models/stagiaire.model";

@Injectable({
  providedIn: 'root'
})
export class TuteurService {
  public host:string = "http://localhost:8080";

  constructor(
        private http:HttpClient
  ) { }

  public getAllTuteur():Observable<Tuteur[]>{
    return this.http.get<Tuteur[]>(this.host+"/Tuteurs");
  }

 /* public addTuteur(tuteur : Tuteur):Observable<Tuteur>{
    return  this.http.post<Tuteur>(this.host+"/Tuteurs",tuteur);
  }*/

  public addTuteur(tuteur : Tuteur):Observable<Tuteur>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Tuteur>(this.host+`/Tuteurs`, tuteur, { headers });
  }

  public deleteTuteur(Tuteurid:number):Observable<void>{
    return this.http.delete<void>(this.host+/Tuteurs/+Tuteurid)
  }

  public updateTuteur(tuteur: any): Observable<Tuteur> {
    return this.http.put<Tuteur>(`${this.host}/Tuteurs`, tuteur);
  }

  public getTuteurById(tuteurId : number):Observable<Tuteur>{
    return this.http.get<Tuteur>(this.host+"/Tuteurs/"+tuteurId);
  }
  public affecterStageTuteur(tuteurId: number, stageId: number) {
    const url = `${this.host}/Tuteurs/${tuteurId}/addStage/${stageId}`;
    return this.http.put<any>(url, {});
  }

  public getTuteurByStageId(stageId: number): Observable<Tuteur> {
    return this.http.get<Tuteur>(`${this.host}/Tuteurs/stage/${stageId}`);
  }

  public getStageByTuteurId(tuteurId: number): Observable<any> {
    return this.http.get<any>(`${this.host}/Tuteurs/${tuteurId}/stages`);
  }



}
