import multer from "multer";
import multerConfig from "../config/multerConfig";

import Foto from "../models/Foto";
import Produto from "../models/Produto";

const upload = multer(multerConfig).single("arquivo"); //faz o multer usar as configurações criadas para receber o arquivo

export const createFoto = (req, res) => {
    return upload(req, res, async (error) => {
        if (error) {
            return res.status(400).json({
                errors: [error.code]
            });
        }

        const { produto_id } = req.body;
        const produto = await Produto.findByPk(produto_id);

        if (!produto) {
            return res.status(400).json({
                "errors": ["Esse produto não existe!"]
            });
        }

        const { originalname, filename } = req.file;
        const foto = await Foto.create({ originalname, filename, produto_id });
        return res.json(foto);
    });
}
