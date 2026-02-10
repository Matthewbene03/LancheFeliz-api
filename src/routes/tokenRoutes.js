import * as tokenController from "../controller/tokenController"
import express from "express";

const router = express.Router();

//store/create -> cria um novo usuario -> POST
router.post("/", tokenController.createToken);

export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/