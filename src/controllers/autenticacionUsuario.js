import { tokenGeneration } from "../utils/tokenCreation.js";
import { user } from "../models/user.js";

export const login = (request, response) => {
  const { email, password } = request.body;
  if (email != user.email || password != user.password) {
    response.status(401).json({ message: "no esta autorizado" });
  } else {
    const generatedToken = tokenGeneration(user);
    response.json({ generatedToken });
  }
};
