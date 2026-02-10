import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario";

export default async (req, res, next) => {
  const { authorization } = req.headers;

  console.log("Authorization: " + authorization);

  if (!authorization) {
    return res.status(400).json({
      erros: ["Usuário inválido!"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await Usuario.findOne({
      where: {
        id,
        email,
      }
    });

    if (!user) {
      return res.status(400).json({
        erros: ["Usuário inválido!"],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(400).json({
      erros: ["Token expirado ou inválido!"],
    });
  }
};
