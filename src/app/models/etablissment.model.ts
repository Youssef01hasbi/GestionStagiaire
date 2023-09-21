import { Formation } from './formation.model'; // Assuming you have a Formation model

export interface Etablissment {
  id: number;
  Nom: string;
  formations: Formation[];
}
