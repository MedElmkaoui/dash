import { Caisse } from "./caisse";

export interface AlimentationCaisse {
    id: number,
    date: string,
    userEmiteur: {id: number, name: string, caisse: Caisse},
    userReciver: {id: number, name: string, caisse: Caisse},
    type: string,
    montant: number,
    compte: {id: number, name:string},
    justif: string,
  }