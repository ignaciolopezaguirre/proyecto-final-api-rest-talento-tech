import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouters from "./src/routes/productsRouter.js";

const app = express();
app.use(cors());

app.use(express.json()); // middleware para que convertir el cuerpo de las peticiones en formato JSON

app.use("/api", productsRouters);

const PORT = process.env.PORT || 3000;
app.get("/", (request, response) => {
  response.json({ message: "pagina principal de proyecto final " });
});

app.use((request, response, next) => {
  // middleware para manejar el error 404 en caso de manejar una ruta desconocida.
  response.status(404).send("no se encuentra");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
