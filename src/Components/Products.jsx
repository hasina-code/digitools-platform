import { use } from "react";


const Products = ({  carts, setCarts }) => {
  const products = use();

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