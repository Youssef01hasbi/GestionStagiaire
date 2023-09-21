import { Rapport } from './rapport.model'; // Assuming you have a Rapport model

export interface Note {
  id: number;
  note: number;
  observation: string;
  rapports: Rapport[];
}
