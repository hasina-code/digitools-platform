import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({ dataPromise, carts, setCarts }) => {
  const products = use(dataPromise);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts} />
        ))}
      </div>
    </div>
  );
};

export default Products;