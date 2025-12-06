import { Router } from "express";
import { login } from "../controllers/autenticacionUsuario.js";

const loginRouter = Router();

loginRouter.post("/api/login", login);

export default loginRouter;
