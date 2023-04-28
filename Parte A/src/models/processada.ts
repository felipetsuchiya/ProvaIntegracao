import { Folha } from "./folha";

export interface Processada {
    folha: Folha,
    bruto: number,
    irrf: number,
    inss: number,
    fgts: number,
    idProcessos: string;
    
}