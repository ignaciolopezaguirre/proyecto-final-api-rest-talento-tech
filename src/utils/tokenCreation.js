import jwt from "jsonwebtoken";
import "dotenv/config";

const secret_key = process.env.JWT_SECRET;

export const tokenGeneration = (userData) => {
  const user = { email: userData.email, password: userData.password };
  const expirationTime = { expiresIn: "30m" };

  const token = jwt.sign(user, secret_key, expirationTime);
  return token;
};
