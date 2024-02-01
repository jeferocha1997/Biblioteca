import mongoose, { mongo } from "mongoose";
// utilização da bilbioteca mongoose para modelar os dados para o banco de dados
async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
};

export default conectaNaDatabase;
