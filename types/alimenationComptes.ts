import { Comptes } from "./comptes";
import { Caisse } from "./caisse";

export interface AlimentationComptes {
    id: number,
    date: string,
    compteEmiteur: Comptes ,
    compteReciver: Comptes,
    type: string,
    montant: number,
    caisse: Caisse,
    justif: string,
  }