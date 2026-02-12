import Sequelize, { Model } from "sequelize";

class Produto extends Model {
    static init(sequelize) { //Recebe a conexão com o banco
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: true,
                validate: {
                    len: {
                        args: [3, 250],
                        msg: "Campo nome deve ter entre 3 e 250 caracteres!",
                    }
                }
            },
            preco: {
                type: Sequelize.FLOAT,
                defaultValue: 0.00,
            },
            categoria: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: true
            },
            ativo: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
            tempoPreparo: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
        }, {
            sequelize, //Recebe a conexão com o banco
            tableName: "produtos",
            underscored: true,
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: "produto_id" })
    }
};

export default Produto;
