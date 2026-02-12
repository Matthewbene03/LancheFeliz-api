import express from "express";
import * as fotoController from "../controller/fotoController"
import loginRequiredGerente from "../middlewares/loginRequired/loginRequiredGerente";

const router = express.Router();

router.post("/", loginRequiredGerente,fotoController.createFoto);

export default router;