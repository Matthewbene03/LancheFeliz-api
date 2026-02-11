import Sequelize, { Model } from "sequelize";

class Servico extends Model {
    static init(sequelize) { //Recebe a conexão com o banco
        super.init({
            status: {
                type: Sequelize.STRING,
                defaultValue: "",
            },
            numeroMesa: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
            valorTotal: {
                type: Sequelize.DECIMAL(10, 2),
                defaultValue: 0.00,
                allowNull: false,
            },
            observacao: {
                type: Sequelize.STRING,
                defaultValue: "",
                allowNull: true,
                validate: {
                    len: {
                        args: [0, 300],
                        msg: "Campo observação deve ter até 300 caracteres!",
                    }
                }
            },
            tempoInicioPreparo: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            tempoFimPreparo: {
                type: Sequelize.DATE,
                allowNull: true,
            },
        }, {
            sequelize, //Recebe a conexão com o banco
            tableName: "servicos",
            underscored: true,
        });
        return this;
    }

    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey: "usuario_id"})
    }
};

export default Servico;
