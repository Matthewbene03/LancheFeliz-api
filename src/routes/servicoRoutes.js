import * as servicoController from "../controller/servicoController"
import express from "express";

const router = express.Router();

//index -> Lista todos os servicos -> GET
//Nem todos os usuarios vão poder ter acesso aos serviços que foram feitos. Todos os usuarios podem ver os serviços, mas usuarios que são do tipo cliente e garçom, tem que ter acesso a apenas o seu serviço, ao qual ele mesmo fez o pedido. Os outros tipos de usuarios, podem ter acesso a todos os serviços
router.get("/", servicoController.indexServico)

//show -> mostra um usuario -> GET
//Cada usuario vai ter acesso ao seu unico pedido, seja ele cliente ou garçom.
router.get("/:id", servicoController.showServico)

//store/create -> cria um novo usuario -> POST
//Quem cria um serviço vai ser apenas o cliente e o garçom.
router.post("/", servicoController.createServico)

//update -> atualiza um usuario -> PATCH ou PUT
//Acho que não é algo que deve ter. Será???????
//Quem atualiza um serviço vai ser apenas o cliente e o garçom. Mas esses usuarios podem apenas alterar os seus serviços
router.put("/:id", servicoController.updateServico)

//delete -> apaga um usuario -> DELETE
//Acho que não é algo que deve ter. Será???????
//Quem deleta um serviço vai ser apenas o cliente e o garçom. Mas esses usuarios podem apenas alterar os seus serviços
router.delete("/:id", servicoController.deleteServico)


export default router;