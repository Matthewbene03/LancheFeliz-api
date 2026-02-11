import { Sequelize } from "sequelize";
import dataBaseConfig from "../config/database";
import Usuario from "../models/Usuario";
import Produto from "../models/Produto";
import Servico from "../models/Servico";

const models = [Usuario, Produto, Servico];

const connection = new Sequelize(dataBaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));
