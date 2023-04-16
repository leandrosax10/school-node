import ProductRepository from "../repository/product.repository";
import { Product } from "../models/product.model";

class ProductsService {

  getAll() {
    return ProductRepository.getlAll();
  }

  create(product: typeof Product) {
    return ProductRepository.create(product);
  }

  remove(id: string) {
    return ProductRepository.remove(id);
  }

  update(id: string, product: Partial<typeof Product>) {
    return ProductRepository.update(id, product);
  }
}

export default new ProductsService();
