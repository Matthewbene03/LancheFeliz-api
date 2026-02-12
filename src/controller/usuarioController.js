import Usuario from "../models/Usuario";
import * as TipoUsuario from "../config/enums/TipoUsuario"

export const indexUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({ attributes: ["id", "nome", "email", "tipo"] });
        res.json(usuarios);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const showUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o ID do usuário!"]
            })
        }

        const usuario = await Usuario.findByPk(id, { attributes: ["id", "nome", "email", "tipo"] });

        if (!usuario) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }

        res.json(usuario);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const createUsuarioCliente = async (req, res) => {
    const dadosUsuario = req.body;
    dadosUsuario.tipo = TipoUsuario.Cliente;

    try {
        if (!dadosUsuario) {
            return res.status(400).json({
                "erros": ["É necessário informar os dados do usuário"]
            })
        }

        const { id, nome, email, tipo } = await Usuario.create(dadosUsuario);
        res.json({ id, nome, email, tipo });
    } catch (e) {
        if (e.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({
                "erros": ["Email já existe."],
            })
        }

        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const createUsuarioFuncionario = async (req, res) => {
    const dadosUsuario = req.body;

    try {
        if (!dadosUsuario) {
            return res.status(400).json({
                "erros": ["É necessário informar os dados do usuário"]
            })
        }

        const { id, nome, email, tipo } = await Usuario.create(dadosUsuario);
        res.json({ id, nome, email, tipo });
    } catch (e) {
        if (e.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({
                "erros": ["Email já existe."],
            })
        }

        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const updateUsuario = async (req, res) => {
    const id = req.userId || req.params.id;
    const dadosUsuario = req.body;

    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o ID do usuário!"]
            })
        }

        const usuarioVelho = await Usuario.findByPk(id);

        if (!usuarioVelho) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }

        if (req.tipoUsuario !== TipoUsuario.Gerente) { //Se o tipo do usuario não for gerente, ele não pode trocar o seu tipo
            dadosUsuario.tipo = usuarioVelho.tipo;
        }

        const { id: idUser, nome, email, tipo } = await usuarioVelho.update(dadosUsuario);
        res.json({ idUser, nome, email, tipo });
    } catch (e) {
        if (e.name === "SequelizeUniqueConstraintError") {
            return res.status(400).json({
                "erros": ["Email já existe."],
            })
        }

        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const deleteUsuario = async (req, res) => {
    const { tipo } = req.tipoUsuario;

    if (tipo !== TipoUsuario.Cliente || tipo !==TipoUsuario.Gerente) { //Daqui só passa se for cliente ou gerente.
        return res.status(400).json({
            "erros": ["Você não tem autorização para deletar a sua conta!"]
        })
    }

    const id  = req.userId || req.params.id;
    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o ID do usuário!"]
            })
        }

        const usuarioVelho = await Usuario.findByPk(id);

        if (!usuarioVelho) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }
        await usuarioVelho.destroy();
        res.json(null);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}