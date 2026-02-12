import Produto from "../models/Produto";
import Foto from "../models/Foto"

export const indexProduto = async (req, res) => {
    try {
        const produtos = await Produto.findAll({
            attributes: ["id", "nome", "preco", "categoria", "ativo", "tempoPreparo"],
            order: [["id", "DESC"], [Foto, "id", "DESC"]],
            include: {
                model: Foto,
                attributes: ["url", "filename"]
            }
        });

        if (!produtos.length) {
            return res.status(400).json({
                "erros": ["Não tem produtos cadastrados!"]
            })
        }
        res.json(produtos);
    } catch (e) {
        return res.status(400).json({
            erros: e.errors
                ? e.errors.map(err => err.message)
                : [e.message],
        });
    }
}

export const showProduto = async (req, res) => {
    const { id } = req.params
    try {

        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o id do produto!"]
            })
        }

        const produto = await Produto.findByPk(id, {
            attributes: ["id", "nome", "preco", "categoria", "ativo", "tempoPreparo"],
            order: [["id", "DESC"], [Foto, "id", "DESC"]],
            include: {
                model: Foto,
                attributes: ["url", "filename"]
            }
        });

        if (!produto) {
            return res.status(400).json({
                "erros": ["Não existe esse produto!"]
            })
        }

        const { id: idUser, nome, preco, categoria, ativo, tempoPreparo } = produto;
        res.json({ idUser, nome, preco, categoria, ativo, tempoPreparo });
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const createProduto = async (req, res) => {
    const dadosProduto = req.body;
    try {
        if (!dadosProduto) {
            return res.status(400).json({
                "erros": ["É necessário informar os dados do produto"]
            })
        }

        const { id: idUser, nome, preco, categoria, ativo, tempoPreparo } = await Produto.create(dadosProduto);
        res.json({ idUser, nome, preco, categoria, ativo, tempoPreparo });
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const updateProduto = async (req, res) => {
    const { id } = req.params;
    const dadosProduto = req.body;
    try {

        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o id do produto!"]
            })
        }

        const produtoVelho = await Produto.findByPk(id);

        if (!produtoVelho) {
            return res.status(400).json({
                "erros": ["Não existe esse produto!"]
            })
        }

        const { id: idUser, nome, preco, categoria, ativo, tempoPreparo } = await produtoVelho.update(dadosProduto)
        res.json({ idUser, nome, preco, categoria, ativo, tempoPreparo });
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const deleteProduto = async (req, res) => {
    const { id } = req.params;
    try {

        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o id do produto!"]
            })
        }

        const produtoDeletar = await Produto.findByPk(id);

        if (!produtoDeletar) {
            return res.status(400).json({
                "erros": ["Não existe esse produto!"]
            })
        }

        await produtoDeletar.destroy();
        res.json(null);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}