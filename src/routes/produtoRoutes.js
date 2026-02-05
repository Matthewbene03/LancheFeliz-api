import * as produtoController from "../controller/produtoController"
import express from "express";

const router = express.Router();

//index -> Lista todos os usuarios -> GET
router.get("/", produtoController.indexProduto)

//show -> mostra um usuario -> GET
router.get("/:id", produtoController.showProduto)

//store/create -> cria um novo usuario -> POST
router.post("/", produtoController.createProduto)

//update -> atualiza um usuario -> PATCH ou PUT
router.put("/:id", produtoController.updateProduto)

//delete -> apaga um usuario -> DELETE
router.delete("/:id", produtoController.deleteProduto)


export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/