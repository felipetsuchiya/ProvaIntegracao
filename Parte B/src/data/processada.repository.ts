import { Processada } from "../models/processada";

let processadas: Processada[] = [];

export class ProcessadaRepository {
  listar(): Processada[] {
    return processadas;
  }

  cadastrar(processada: Processada): Processada {
    processadas.push(processada);
    return processada;
  }

  buscar(idProcessos: string): Processada[] {
    return processadas.filter((f) => f.idProcessos === idProcessos)!;
  }
}