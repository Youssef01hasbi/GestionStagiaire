
import { Stagiaire } from './stagiaire.model'; // Assuming you have a Stagiaire model
import { Evaluation } from './evaluation.model';
import {Tuteur} from "./tuteur.model";
import {TypeStage} from "./typeStage.model";
import {Rapport} from "./rapport.model";

export interface Stage {
  id: number;
  dateDebut: Date;
  dateFin: Date;
  sujet: string;
  description: string;
  photo: string;
  typeStage: TypeStage;
  tuteur: Tuteur;
  stagiaire: Stagiaire;
  rapports: Rapport[];
  evaluations: Evaluation[];
}
