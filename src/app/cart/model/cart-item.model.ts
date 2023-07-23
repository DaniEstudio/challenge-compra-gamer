import { ProductModel } from "src/app/product-list/model/product.model";

export interface CartItemModel {
  product: ProductModel;
  quantity: number;
}

