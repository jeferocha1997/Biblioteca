import "dotenv/config";
import app from "./src/app.js"; // Passo 1: configurando ambiente

const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
