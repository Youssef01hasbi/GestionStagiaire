import {Formation} from "./formation.model";
import {Evaluation} from "./evaluation.model";

export interface Stagiaire {
  id: number;
  nom: string;
  prenom: string;
  cin: string;
  photo: string;
  dateNaissance: Date;
  pathCv: string;
  gmail: string;
  telephone: string;
  niveauEtude: string;
  formation: Formation;
  evaluation: Evaluation[];
}
