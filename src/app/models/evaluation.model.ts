import { Stagiaire } from './stagiaire.model';
import {Stage} from "./stage.model"; // Assuming you have a Stagiaire model

export interface Evaluation {
  id: number;
  dateSoutenance: Date;
  etatAvancement: number;
  stagiaire: Stagiaire;
  stage: Stage;
}
