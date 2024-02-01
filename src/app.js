import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";  //PASSO 2 configurando aplicação com banco de dados
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");   //
})

const app = express();
routes(app);



export default app;
