import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET;
export const autenticar = (request, response, next) => {
  const authHeader = request.headers.authorization;
  /* const token = request.header["authorization"].split(" ")[1]; */

  if (!authHeader) {
    return response.status(401).json({ message: "token requerido" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return response.status(401).json({ meesage: "token invalido" });
  }

  jwt.verify(token, secret_key, (error) => {
    if (error) {
      response.sendStatus(403);
    }
    next();
  });
};
