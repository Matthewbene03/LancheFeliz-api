import { Sequelize } from "sequelize";
import dataBaseConfig from "../config/database";
import Usuario from "../models/Usuario";

const models = [Usuario];

const connection = new Sequelize(dataBaseConfig);

models.forEach(model => model.init(connection));
//models.forEach(model => model.associate && model.associate(connection.models));

