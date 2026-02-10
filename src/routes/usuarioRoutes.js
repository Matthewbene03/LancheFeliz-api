import * as usuarioController from "../controller/usuarioController";
import loginRequired from "../middlewares/loginRequired";
import express from "express";

const router = express.Router();

//index -> Lista todos os usuarios -> GET
router.get("/", usuarioController.indexUsuario)

//show -> mostra um usuario -> GET
router.get("/:id", usuarioController.showUsuario)

//store/create -> cria um novo usuario -> POST
router.post("/", usuarioController.createUsuario)

//update -> atualiza um usuario -> PATCH ou PUT
router.put("/", loginRequired, usuarioController.updateUsuario)

//delete -> apaga um usuario -> DELETE
router.delete("/", loginRequired, usuarioController.deleteUsuario)


export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/