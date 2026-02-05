import * as cozinhaController from "../controller/cozinhaController"
import express from "express";

const router = express.Router();

//index -> Lista todos os usuarios -> GET
router.get("/", cozinhaController.indexCozinha)

//show -> mostra um usuario -> GET
router.get("/:id", cozinhaController.showCozinha)

//store/create -> cria um novo usuario -> POST
router.post("/", cozinhaController.createCozinha)

//update -> atualiza um usuario -> PATCH ou PUT
router.put("/:id", cozinhaController.updateCozinha)

//delete -> apaga um usuario -> DELETE
router.delete("/:id", cozinhaController.deleteCozinha)


export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/