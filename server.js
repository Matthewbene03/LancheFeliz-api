//Importações de arquivos do node
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";

//Importações de arquivos proprios
import "./src/database/index"
import usuarioRouter from "./src/routes/usuarioRoutes"
import produtoRouter from "./src/routes/produtoRoutes"
import servicoRouter from "./src/routes/servicoRoutes"
import tokenRouter from "./src/routes/tokenRoutes"


//Criando o "app"
const app = express(); //Inicio o express

//Middleware do proprio express
app.use(express.json()); // Ler e interpretar requisições com corpo em JSON.
app.use(express.urlencoded({ extended: true })); //serve para ler dados enviados pelo formulário (POST)
app.use(express.static(path.resolve(__dirname, 'uploads'))); //Informa para o express os arquivos estáticos


//Rotas proprias criadas
app.use("/usuario", usuarioRouter);
app.use("/produto", produtoRouter);
app.use("/servico", servicoRouter);
app.use("/token", tokenRouter);

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

const port = 3001;
app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
    console.log("App funcionando");
})