import * as produtoController from "../controller/produtoController";
import loginRequiredGerente from "../middlewares/loginRequired/loginRequiredGerente";
import express from "express";

const router = express.Router();

//index -> Lista todos os produtos -> GET
//Vou deixar livre até o momento
router.get("/", produtoController.indexProduto)

//show -> mostra um produto -> GET
//Vou deixar livre até o momento
router.get("/:id", produtoController.showProduto)

//store/create -> cria um novo produto -> POST
//Obs: Adicionar futuramente o loginRequired sendo que apenas o usuário com o tipo de "gerente" pode fazer essa requisição
router.post("/", loginRequiredGerente, produtoController.createProduto)

//update -> atualiza um produto -> PATCH ou PUT
//Obs: Adicionar futuramente o loginRequired sendo que apenas o usuário com o tipo de "gerente" pode fazer essa requisição
router.put("/:id", loginRequiredGerente, produtoController.updateProduto)

//delete -> apaga um produto -> DELETE
//Obs: Adicionar futuramente o loginRequired sendo que apenas o usuário com o tipo de "gerente" pode fazer essa requisição
router.delete("/:id", loginRequiredGerente, produtoController.deleteProduto)


export default router;