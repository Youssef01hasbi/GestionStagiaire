import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostulezService {
  public host:string = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  postulerPourStage(idStagiaire: number, idStage: number): Observable<boolean> {
    const url = `${this.host}/api/postulez/postuler/${idStagiaire}/${idStage}`;
    return this.http.post<boolean>(url, {});
  }

  getStagiairePostulerById(idStagiaire: number): Observable<any[]> {
    const url = `${this.host}/api/postulez/postulations/stagiaire/${idStagiaire}`;
    return this.http.get<any[]>(url);
  }

  CancelPostuler(idPostuler: number): Observable<void> {
    const url = `${this.host}/api/postulez/delete/${idPostuler}`;
    return this.http.delete<void>(url);
  }

  getAllPostulez():Observable<any[]>{
    return this.http.get<any[]>(this.host+"/api/postulez/all");
  }

  validerPostulez(idPostulez: number): Observable<void> {
    const url = `${this.host}/api/postulez/valider/${idPostulez}`;
    return this.http.put<void>(url, {});
  }

}
