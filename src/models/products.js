import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsCollection, id);
    const snapshot = await getDoc(productRef);
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
  } catch (error) {
    console.error(`error al obetner el elemento con id ${id}`, error);
  }
};

export const addNewProduct = async (newProductData) => {
  try {
    const docReference = await addDoc(productsCollection, newProductData);
    return { id: docReference, ...newProductData };
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRefToDelete = doc(productsCollection, id);
    const snapshot = await getDoc(productRefToDelete);
    if (!snapshot.exists()) {
      return false;
    }
    await deleteDoc(productRefToDelete);
    return true;
  } catch (error) {
    console.error(error);
  }
};
