import Usuario from "../models/Usuario"
import jwt from "jsonwebtoken";

export const createToken = async (req, res) => {
    const { email = "", senha = "" } = req.body;

    if (!email || !senha) { //Verifica se tem valor nas const de email e senha 
        return res.status(400).json({
            erros: ["Credenciais invalidas!"],
        });
    }

    const usuario = await Usuario.findOne({ where: { email } }); //Verifica se tem um usuario com esse email no BD;

    if (!usuario) { //Se não tiver o usuário, retorna um erro.
        return res.status(400).json({
            erros: ["Usuário não existe!"],
        })
    }

    if (!(await usuario.passwordIsValid(senha))) { //Verifica se a senha informada é valida para o usuário encontrado no BD
        return res.status(400).json({
            erros: ["Senha invalida!"],
        })
    }
    const { id } = usuario;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
    }); //Cria o token para esse usuário apartir do seu id e email, utilizando as configurações no arquivo .env

    return res.json({ token }) //Retorna um objeto com a chave token e usuario
}
