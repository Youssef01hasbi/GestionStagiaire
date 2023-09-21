import { Stage } from './stage.model'; // Assuming you have a Stage model
import { Note } from './note.model'; // Assuming you have a Note model

export interface Rapport {
  id: number;
  pathRapport: string;
  remarque: string;
  stage: Stage;
  note: Note;
}
