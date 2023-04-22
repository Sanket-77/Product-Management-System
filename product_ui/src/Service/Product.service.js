import axios from "axios";

const API_URL = "http://localhost:8089";

class ProductService {
  saveProduct(product) {
    return axios.post(API_URL + "/saveProduct", product);
  }

  getAllProduct() {
    return axios.get(API_URL + "/product");
  }

  getProductById(id) {
    return axios.get(API_URL + "/product" + id);
  }

  deleteProduct(id) {
    return axios.get(API_URL + "/deleteProduct" + id);
  }

  editProduct(product) {
    return axios.post(API_URL + product.id, product);
  }
}

export default new ProductService();
