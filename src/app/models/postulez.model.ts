export enum StatutCandidature {
  En_attente = 'En_attente',
  Accepte = 'Accepte',
  Refuse = 'Refuse'
}

export interface IPostulez {
  id: number;
  statut: StatutCandidature;
  stagiaireId: number;
  stageId: number;
}
