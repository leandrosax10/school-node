import { Product } from "../models/product.model";

class ProductRepository {
    getlAll() {
        return Product.find();
    }

    create(product: typeof Product) {
        return Product.create(product);
    }

    update(id: string, product: Partial<typeof Product>){
        return Product.updateOne({ id: id}, {$set: product });
    }

    remove(id: string) {
        return Product.deleteOne({ id: id });
    }

}

export default new ProductRepository();