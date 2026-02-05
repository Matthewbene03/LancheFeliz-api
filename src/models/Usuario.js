import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class Usuario extends Model {
  static init(sequelize) { //Recebe a conexão com o banco
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [3, 250],
            msg: "Campo nome deve ter entre 3 e 250 caracteres!",
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
        unique: true,
        validate: {
          isEmail: {
            msg: "Email invalido!",
          }
        }
      },
      senha_hash: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      senha: {
        type: Sequelize.VIRTUAL,
        defaultValue: "",
        validate: {
          len: {
            args: [6, 50],
            msg: "A senha deve ter entre 6 e 50 caracteres!",
          }
        }
      },
    },
      {
        sequelize, //Recebe a conexão com o banco
      });

    this.addHook("beforeSave", async usuario => {
      if (usuario.senha) {
        usuario.senha_hash = await bcrypt.hash(usuario.senha, 8)
      }
    });
    return this;
  }

  passwordIsValid(senha) {
    return bcrypt.compare(senha, this.senha_hash);
  }
};

export default Usuario;
