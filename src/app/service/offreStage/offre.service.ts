import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stage} from "../../models/stage.model";

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  public host:string = "http://localhost:8080"

  constructor( private  http:HttpClient) { }

  public getStages():Observable<Stage[]>{
    return this.http.get<Stage[]>(this.host+"/stages/all")
  }

  ajouterStage(stageData: FormData): Observable<Stage> {
    return this.http.post<Stage>(`${this.host}/stages/ajouter`, stageData);
  }

  getStagePhoto(stageId: number): Observable<any> {
    return this.http.get(this.host+"/stages/photo/"+stageId, { responseType: 'arraybuffer' });
  }

  public deleteStage(stageId:number):Observable<void>{
    return this.http.delete<void>(this.host+"/stages/"+stageId)
  }

  public updateStage(stage: Stage): Observable<Stage> {
    return this.http.put<Stage>(`${this.host}/stages`, stage);
  }

  public getStageById(stageId : number):Observable<Stage>{
    return this.http.get<Stage>(this.host+"/stages/"+stageId);
  }

  public removeStageFromTuteur(tuteurId: number, stageId: number) {
    const url = `${this.host}/stages/${tuteurId}/removeStage/${stageId}`;
    return this.http.delete<any>(url, {});
  }
}
