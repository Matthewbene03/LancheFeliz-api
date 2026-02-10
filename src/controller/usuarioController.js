import Usuario from "../models/Usuario";

export const indexUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({attributes: ["id", "nome", "email"]});
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

        const usuario = await Usuario.findByPk(id, {attributes: ["id", "nome", "email"]});

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

export const createUsuario = async (req, res) => {
    const dadosUsuario = req.body;

    try {
        if (!dadosUsuario) {
            return res.status(400).json({
                "erros": ["É necessário informar os dados do usuário"]
            })
        }

        const {id, nome, email} = await Usuario.create(dadosUsuario);
        res.json({id, nome, email});
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
    const id  = req.userId;
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

        const {id: idUser, nome, email} = await usuarioVelho.update(dadosUsuario);
        res.json({idUser, nome, email});
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
    const { id } = req.userId;
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