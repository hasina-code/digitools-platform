import { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";


const ProductCard = ({ product, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const isFound = carts.find((item) => item.id === product.id);
    setIsSubscribed(!!isFound);
  }, [carts, product.id]);

  const handleSubscription = () => {
    const isFound = carts.find((item) => item.id === product.id);
    if (isFound) {
      
      return;
    }
    setCarts([...carts, product]);
   
  };

  return (
    <div className="border border-zinc-200 rounded-3xl p-6 bg-white flex flex-col h-full relative">
      {product.tag && (
        <span className="absolute top-4 right-4 bg-orange-50 text-orange-500 px-3 py-1 rounded-full text-xs font-bold">
          {product.tag}
        </span>
      )}
      
      <div className="mb-4">
        <img src={product.icon} alt="" className="w-8 h-8 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{product.description}</p>
      </div>

      <div className="text-2xl font-bold mb-6">
        ${product.price}<span className="text-gray-400 text-base font-normal">/{product.period === 'one-time' ? 'One-Time' : 'Mo'}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-green-500"> <TiTick/> </span> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubscription}
        className={`w-full py-4 rounded-2xl font-bold transition-all ${
          isSubscribed 
         ? "bg-green-300 text-gray-400" 
          : "bg-[#7C3AED] text-white shadow-lg shadow-purple-100"
        }`}
        disabled={isSubscribed}
      >
        {isSubscribed ? "✓ Added to cart!" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;