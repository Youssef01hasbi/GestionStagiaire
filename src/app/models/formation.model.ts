import {Stagiaire} from "./stagiaire.model";
import {Etablissment} from "./etablissment.model";

export interface Formation {
  id: number;
  specialite: string;
  diplome: string;
  etablissment: Etablissment;
  stagiaires: Stagiaire[];
}
