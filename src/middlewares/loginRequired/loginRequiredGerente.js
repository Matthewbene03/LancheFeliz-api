import jwt from "jsonwebtoken";
import Usuario from "../../models/Usuario";
import * as TiposUsuario from "../../config/enums/TipoUsuario"

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({
      erros: ["Usuário inválido!"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email, tipo} = dados;

    const user = await Usuario.findOne({
      where: {
        id,
        email
      }
    });

    if (!user) {
      return res.status(400).json({
        erros: ["Usuário inválido!"],
      });
    }

    if (user.tipo !== TiposUsuario.Gerente) {
      return res.status(400).json({
        erros: ["Usuário inválido! Você não é gerente."],
      });
    }

    req.userIdGerente = id;
    req.userEmailGerente = email;
    req.tipoUsuario = tipo;
    return next();
  } catch (e) {
    return res.status(400).json({
      erros: ["Token expirado ou inválido!"],
    });
  }
};
