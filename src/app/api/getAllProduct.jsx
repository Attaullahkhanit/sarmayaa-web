import axios from "axios";

const getAllProduct = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getAllProduct;
