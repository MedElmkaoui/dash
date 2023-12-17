import { Caisse } from "./caisse";

export interface Agence {
    id: number,
    name: string,
    address: string,
    city: string,
    phone: string,
    caisse: Caisse,
  }