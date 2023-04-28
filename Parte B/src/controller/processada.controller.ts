import { Request, Response } from "express";
import { Processada } from "../models/processada";
import { ProcessadaRepository } from "../data/processada.repository";

const repositoryProcessada = new ProcessadaRepository();

export class ProcessadaController {
  async listar(req: Request, res: Response) {
    const processada = await repositoryProcessada.listar();
    return res.status(200).json({
      message: "ok",
      data: processada,
    });
  }

  async cadastrar(req: Request, res: Response) {
    let processada: Processada = req.body;

    processada = await repositoryProcessada.cadastrar(processada);

    return res.status(201).json({
      message: "processada Cadastrada",
      data: processada,
    });
  }

  async buscar(req: Request, res: Response) {
    const id = req.params.id;

    const processada = await repositoryProcessada.buscar(id);

    return res.status(200).json({
      data: processada,
    })
  }




}
