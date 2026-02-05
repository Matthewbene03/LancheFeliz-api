import * as caixaController from "../controller/caixaController"
import express from "express";

const router = express.Router();

//index -> Lista todos os usuarios -> GET
router.get("/", caixaController.indexCaixa)

//show -> mostra um usuario -> GET
router.get("/:id", caixaController.showCaixa)

//store/create -> cria um novo usuario -> POST
router.post("/", caixaController.createCaixa)

//update -> atualiza um usuario -> PATCH ou PUT
router.put("/:id", caixaController.updateCaixa)

//delete -> apaga um usuario -> DELETE
router.delete("/:id", caixaController.deleteCaixa)


export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/