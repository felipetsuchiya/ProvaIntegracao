import { Folha } from "../models/folha";
import { PrismaClient } from "@prisma/client";
import { Processada } from "../models/processada";

let folhas: Folha[] = [];

const prisma = new PrismaClient();

export class FolhaRepository {
  async listar(): Promise<Folha[]> {
    return await prisma.folha.findMany();
  }

  async cadastrar(folha: Folha): Promise<Folha> {
    await prisma.folha.create({
      data: {
        mes: folha!.mes,
        ano: folha!.ano,
        horas: folha!.horas,
        valor: folha!.valor,
        nome: folha!.nome,
        cpf: folha!.cpf,
      }
    })
    
    return folha;
  }

  async buscar(id: number): Promise<Folha | null> {
    return await prisma.folha.findUnique({
      where: {
        id: id,
      },
    })
  }

  async deletar(id: number): Promise<Folha | null> {
    try {
      const folha = await prisma.folha.delete({
        where: {
          id: id,
        }
      })
      return folha
    } catch {
      return null;
    }
    
  }
  async alterar(folha: Folha): Promise<Folha | null> {
    try {
      const folhaAlterada = await prisma.folha.update({
        where: {
          id: folha?.id,
        },
        data: {
          mes: folha!.mes,
          ano: folha!.ano,
          horas: folha!.horas,
          valor: folha!.valor,
          nome: folha!.nome,
          cpf: folha!.cpf,
        }
      })
      return folha
    } catch {
      return null
    }
  }

  async Bruto(processada: Processada[]): Promise<Processada[]> {
    let processadas: Processada[] = [];

    processadas.map((p) => {
      console.log(processada)
    })

    return processada
  }
}
