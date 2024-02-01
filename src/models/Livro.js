import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

//PASSO 3 Modelagem de dados
const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: autorSchema
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);
console.log("Modelo 'livros' criado com sucesso");

export default livro;
