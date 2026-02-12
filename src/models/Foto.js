import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

class Foto extends Model {
    static init(sequelize) { //Recebe a conexão com o banco
        super.init({
            originalname: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "",
                validate: {
                    notEmpty: {
                        msg: "Campo não pode ficar vazio!"
                    }
                }
            },
            filename: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: "",
                validate: {
                    notEmpty: {
                        msg: "Campo não pode ficar vazio!"
                    }
                }
            },
            url: {
                type: Sequelize.VIRTUAL,
                get(){
                    return `${appConfig.url}/images/${this.getDataValue("filename")}`
                }
            }
        }, {
            sequelize, //Recebe a conexão com o banco
            tableName: "fotos",
            underscored: true,
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Produto, { foreignKey: "produto_id" })
    }
};

export default Foto;
