export class User{
  id: number;
  name: string;
  department: Department;

  constructor(id: number, name: string, department: Department){}
  setDepartement(name: Department){
    this.department = name;
  }
}
export interface UserDetail {
  name: string;
  sondages: Sondage[];
  departement: Department;
  user_reunions: UserReunion[];
  user_sondages: UserSondage[];
  id: number;
}

export interface Department {
  id: number;
  name: string;
}
export interface Sondage {
  sondage_id: number;
  date_sondage: number;
  user_sondages: UserSondage[];
  lieuSondage?: LieuSondage;
  intitule_son: string;
  dateSondage?: DateSondage;
}

export interface DateSondage {
  dateSondageId: number;
  date1: number;
  date2: number;
  date3: number;
}

export interface LieuSondage {
  lieuSondageId: number;
  lieu1: string;
  lieu2: string;
  lieu3: string;
}

export interface UserSondage {
  user_sondage_id: number;
  lieuChoisi?: string;
  dateChoisi?: number;
}

export interface UserReunion {
  user_reunion_id: number;
  allergie: string;
}
