import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouters from "./src/routes/productsRouter.js";

import loginRouter from "./src/routes/loginRouter.js";
const app = express();
app.use(cors());

app.use(express.json()); // middleware para que convertir el cuerpo de las peticiones en formato JSON

app.use("/api", productsRouters);
app.use("/", loginRouter);

const PORT = process.env.PORT || 3000;
app.get("/", (request, response) => {
  response.send("<h1>Página principal del proyecto final</h1>");
});

app.use((request, response, next) => {
  response.status(404).send("no se encuentra");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
