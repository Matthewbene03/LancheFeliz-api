//Arquivo de configuração para usar o multer para uso de upload de arquivos

import multer from "multer";
import {extname, resolve} from "path"; //Extname serve para pegar a extensao do arquivo

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); //Serve para ajudar a evitar nomes de arquivos duplicados

export default {
  fileFilter: (req, file, cb) => { //Filtrar os tipos de arquivos
    if(file.mimetype !== "image/png" && file.mimetype !== "image/jpeg"){
      return cb(new multer.MulterError("Arquivo precisa ser do tipo png ou jpeg!"));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({ // Diz ao Multer que os arquivos serão salvos no disco.
    destination: (req, file, cb) => { //Lugar que vai salvar o arquivo. cb do proprio multer
      cb(null, resolve(__dirname, "..", "..", "uploads", "images")); //Recebe um erro e o caminho da pasta de destino
    },
    filename: (req, file, cb) => { //Seria para mudar o nome de um arquivo
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`) //Da um renomear no nome do arquivo passando ser a data em ms e com a extensao do arquivo
    },
  }),
};
