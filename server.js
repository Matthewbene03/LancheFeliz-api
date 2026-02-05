//Importações de arquivos do node
import express from "express";
import path from "path";

//Importações de arquivos proprios
import clienteRouter from "./src/routes/clienteRoutes"
import caixaRouter from "./src/routes/caixaRoutes"
import cozinhaRouter from "./src/routes/cozinhaRoutes"
import garcomRouter from "./src/routes/garcomRoutes"

//Criando o "app"
const app = express(); //Inicio o express

//Middleware do proprio express
app.use(express.json()); // Ler e interpretar requisições com corpo em JSON.
app.use(express.urlencoded({ extended: true })); //serve para ler dados enviados pelo formulário (POST)
app.use(express.static(path.resolve(__dirname, 'uploads'))); //Informa para o express os arquivos estáticos


//Rotas proprias criadas
app.use("/clientes", clienteRouter);
app.use("/caixa", caixaRouter);
app.use("/garcom", garcomRouter);
app.use("/cozinha", cozinhaRouter);

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

const port = 3001;
app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
    console.log("App funcionando");
})