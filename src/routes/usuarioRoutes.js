import * as usuarioController from "../controller/usuarioController";
import loginRequired from "../middlewares/loginRequired/loginRequired";
import loginRequiredGerente from "../middlewares/loginRequired/loginRequiredGerente";
import express from "express";

const router = express.Router();

//index -> Lista todos os usuarios -> GET
//Somente o gerente vai poder verificar e listar todos os usuarios do sistema.
router.get("/", loginRequiredGerente, usuarioController.indexUsuario)

//show -> mostra um usuario -> GET
//Somente o gerente vai poder verificar e listar todos os usuarios do sistema.
router.get("/:id", loginRequiredGerente, usuarioController.showUsuario)

//store/create -> cria um novo usuario -> POST
//Qualquer cliente(Usuario) pode criar uma conta. Quando cria uma conta, essa conta vai ser apenas cliente. 
// Para criar um usuario: Funcionario, apenas o gerente vai poder criar.
router.post("/cliente", usuarioController.createUsuarioCliente)
router.post("/funcionario", loginRequiredGerente, usuarioController.createUsuarioFuncionario)

//update -> atualiza um usuario -> PATCH ou PUT
//Qualquer Usuario pode atualizar a sua conta.
router.put("/", loginRequired, usuarioController.updateUsuario)
router.put("/:id", loginRequiredGerente, usuarioController.updateUsuario)

//delete -> apaga um usuario -> DELETE
//Se usuario for um cliente, ele pode deletar a sua conta. Se o usuario for funcionario, apenas o gerente vai poder deletar sua conta.
router.delete("/", loginRequired, usuarioController.deleteUsuario)
router.delete("/:id", loginRequiredGerente, usuarioController.deleteUsuario)


export default router;

/* Metodos do controller
  index -> Lista todos os usuarios -> GET
  store/create -> cria um novo usuario -> POST
  delete -> apaga um usuario -> DELETE
  show -> mostra um usuario -> GET
  update -> atualiza um usuario -> PATCH ou PUT
*/