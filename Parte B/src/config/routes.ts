
import { Router } from 'express';
import { ProcessadaController } from '../controller/processada.controller';

const router: Router = Router();

const controller = new ProcessadaController();

router.get("/processada", controller.listar);
router.get("/processada/:id", controller.buscar);
router.post("/processada", controller.cadastrar);

export { router };
