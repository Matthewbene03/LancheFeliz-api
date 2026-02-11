import Servico from "../models/Servico";

export const indexServico = async (req, res) => {
    try {
        const servicos = await Servico.findAll();

        if (!servicos.length) {
            return res.status(400).json({
                "erros": ["Não tem servicos cadastrados!"]
            })
        }

        res.json(servicos);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const showServico = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o id do produto!"]
            })
        }

        const servico = await Servico.findByPk(id);

        if (!servico) {
            return res.status(400).json({
                "erros": ["Não existe esse servico!"]
            })
        }

        res.json(servicos);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const createServico = async (req, res) => {
    const dadosServico = req.body;
    try {

        if (!dadosServico) {
            return res.status(400).json({
                "erros": ["É necessário informar os dados do produto"]
            })
        }

        const novoServico = await Servico.create(dadosServico);
        res.json(novoServico);
    } catch (e) {
        console.log("O erro começa aqui" + e)
    }
}

export const updateServico = async (req, res) => {
    const dadosServico = req.body;
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o id do produto!"]
            })
        }

        const velhoServico = await Servico.findByPk(id);

        if (!velhoServico) {
            return res.status(400).json({
                "erros": ["Não existe esse servico!"]
            })
        }

        const novoServico = await velhoServico.update(dadosServico);
        res.json(novoServico);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}

export const deleteServico = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({
                "erros": ["Informe o id do produto!"]
            })
        }

        const velhoServico = await Servico.findByPk(id);

        if (!velhoServico) {
            return res.status(400).json({
                "erros": ["Não existe esse servico!"]
            })
        }

        await velhoServico.destroy();
        res.json(null);
    } catch (e) {
        return res.status(400).json({
            "erros": e.errors.map((err) => err.message),
        })
    }
}