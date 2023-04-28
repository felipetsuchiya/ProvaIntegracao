
import { Router } from 'express';
import { FolhaController } from './../controller/folha.controller';

const router: Router = Router();

const controller = new FolhaController();

router.get("/folha", controller.listar);
router.get("/folha/:id", controller.buscar);
router.post("/folha", controller.cadastrar);
router.delete("/folha/:id", controller.deletar);
router.put("/folha", controller.alterar);

export { router };
