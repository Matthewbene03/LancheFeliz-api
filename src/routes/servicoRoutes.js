import * as servicoController from "../controller/servicoController"
import express from "express";

const router = express.Router();

//index -> Lista todos os usuarios -> GET
router.get("/", servicoController.indexServico)

//show -> mostra um usuario -> GET
router.get("/:id", servicoController.showServico)

//store/create -> cria um novo usuario -> POST
router.post("/", servicoController.createServico)

//update -> atualiza um usuario -> PATCH ou PUT
router.put("/:id", servicoController.updateServico)

//delete -> apaga um usuario -> DELETE
router.delete("/:id", servicoController.deleteServico)


export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/