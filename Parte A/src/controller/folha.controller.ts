import { FolhaRepository } from "../data/folha.repository";
import { Request, Response } from "express";
import { Folha } from './../models/folha';

const repository = new FolhaRepository();

export class FolhaController {
  async listar(req: Request, res: Response) {
    const folhas = await repository.listar();
    return res.status(200).json({
      message: "ok",
      data: folhas,
    });
  }

  async cadastrar(req: Request, res: Response) {
    let folha: Folha = req.body;

    folha = await repository.cadastrar(folha);

    return res.status(201).json({
      message: "Folha Cadastrada",
      data: folha,
    });
  }

  async buscar(req: Request, res: Response) {
    const id = Number.parseInt(req.params.id);

    const folha = await repository.buscar(id);

    return res.status(200).json({
      data: folha,
    })
  }

  async deletar(req: Request, res: Response) {
    const id = Number.parseInt(req.params.id);
    let folhas = await repository.deletar(id);
    return res.status(200).json({
      message: "Folha Deletada",
      data: folhas,
    })
  }

  async alterar(req: Request, res: Response) {
    let folha: Folha | null  = req.body;
    folha = await repository.alterar(folha);

    if (!folha) {
      return res.status(404).json({ message: "Folha não encontrado" });
    }

    return res.status(200).json({
      message: "Folha Atualizada",
      data: folha,
    });
  }
  
  async Bruto(req: Request, res: Response) {
    
  }
}
