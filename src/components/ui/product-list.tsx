import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import React from "react";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5  lg:ml-0 lg:mr-0 lg:grid lg:grid-cols-4 lg:justify-center lg:px-40">
      {products.map((product) => (
        <div key={product.id} className="w-[150px] max-w-[150px]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
