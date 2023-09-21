import {Stage} from "./stage.model";

export interface Tuteur {
  id: number;
  nom: string;
  email: string;
  tele: string;
  username: string;
  stages: Stage[];
}
