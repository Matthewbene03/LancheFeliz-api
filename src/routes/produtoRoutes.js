import * as produtoController from "../controller/produtoController";
import express from "express";

const router = express.Router();

//index -> Lista todos os produtos -> GET
router.get("/", produtoController.indexProduto)

//show -> mostra um produto -> GET
router.get("/:id", produtoController.showProduto)

//store/create -> cria um novo produto -> POST
//Obs: Adicionar futuramente o loginRequired sendo que apenas o usuário com o tipo de "gerente" pode fazer essa requisição
router.post("/", produtoController.createProduto)

//update -> atualiza um produto -> PATCH ou PUT
//Obs: Adicionar futuramente o loginRequired sendo que apenas o usuário com o tipo de "gerente" pode fazer essa requisição
router.put("/", produtoController.updateProduto)

//delete -> apaga um produto -> DELETE
//Obs: Adicionar futuramente o loginRequired sendo que apenas o usuário com o tipo de "gerente" pode fazer essa requisição
router.delete("/", produtoController.deleteProduto)


export default router;