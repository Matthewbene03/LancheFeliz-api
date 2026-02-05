import Usuario from "../models/Usuario";

export const indexUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (e) {
        res.status(400).json({
            "erros": ["Erro Incomum"]
        })
    }
}

export const showUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }

        const usuario = await Usuario.findByPk(id);
        res.json(usuario);
    } catch (e) {
        res.status(400).json({
            "erros": ["Erro Incomum"]
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

        const novoUsuario = await Usuario.create(dadosUsuario);
        res.json(novoUsuario);
    } catch (e) {
        res.status(400).json({
            "erros": ["Erro Incomum"]
        })
    }
}

export const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const dadosUsuario = req.body;

    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }

        const usuarioVelho = await Usuario.findByPk(id);

        if (!usuarioVelho) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }

        if (!dadosUsuario) {
            return res.status(400).json({
                "erros": ["É necessário informar os dados do usuário"]
            })
        }

        const novoUsuario = await usuarioVelho.update(dadosUsuario);
        res.json(novoUsuario);
    } catch (e) {
        res.status(400).json({
            "erros": ["Erro Incomum"]
        })
    }
}

export const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }

        const usuarioVelho = await Usuario.findByPk(id);

        if (!usuarioVelho) {
            return res.status(400).json({
                "erros": ["Usuário não encontrado!"]
            })
        }

        const usuarioDeletado = await usuarioVelho.destroy();
        res.json(usuarioDeletado);
    } catch (e) {
        res.status(400).json({
            "erros": ["Erro Incomum"]
        })
    }
}