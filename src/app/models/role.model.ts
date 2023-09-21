export enum ERole {
  Role_Stagiaire = 'Role_Stagiaire',
  Role_Encadrant = 'Role_Encadrant',
  Role_Admin = 'Role_Admin'
}

export class Role {
  id: number;
  name: ERole;

  constructor(id: number, name: ERole) {
    this.id = id;
    this.name = name;
  }
}
