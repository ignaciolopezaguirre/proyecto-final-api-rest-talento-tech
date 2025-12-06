import * as model from "../models/products.js";

export const getAllProducts = async (request, response) => {
  response.json(await model.getAllProducts());
};

export const getProductById = async (request, response) => {
  const { id } = request.params;
  const product = await model.getProductById(id);

  if (!product) {
    response.status(404).json({ error: "product not found" });
  }

  response.json(product);
};

export const createProduct = async (request, response) => {
  if (request.body.name == undefined) {
    response.status(422).json({ error: "es necesario el nombre" });
  }

  const { name, price, categories } = request.body;
  const newProduct = await model.addNewProduct({ name, price, categories });
  response.status(201).json(newProduct);
};

export const deleteProduct = async (request, response) => {
  const { id } = request.params;
  const deletedProduct = await model.deleteProduct(id);

  if (!deletedProduct) {
    response.status(404).json({ error: "product not found" });
  }
  response.json({ message: "product deleted" });
};
