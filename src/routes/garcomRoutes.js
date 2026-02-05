import * as clienteController from "../controller/clienteController"
import express from "express";

const router = express.Router();

//index -> Lista todos os usuarios -> GET
router.get("/", clienteController.indexCliente)

//show -> mostra um usuario -> GET
router.get("/:id", clienteController.showCliente)

//store/create -> cria um novo usuario -> POST
router.post("/", clienteController.createCliente)

//update -> atualiza um usuario -> PATCH ou PUT
router.put("/:id", clienteController.updateCliente)

//delete -> apaga um usuario -> DELETE
router.delete("/:id", clienteController.deleteCliente)


export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/