import { BsCart3 } from "react-icons/bs";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((acc, curr) => acc + curr.price, 0);

  const handleRemove = (id) => {
    setCarts(carts.filter(item => item.id !== id));
    toast.error("Removed from cart");
  };

  const handleCheckout = () => {
    if (carts.length === 0) return;
    setCarts([]);
    toast.success("Proceeding to checkout!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <div className="border border-zinc-200 rounded-3xl p-8 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-8">Your Cart</h2>
        
        {carts.length > 0 ? (
          <div className="space-y-6">
            {carts.map((item) => (
              <div key={item.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100">
                    <img src={item.icon} className="w-10 h-10" alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{item.name}</p>
                    <p className="text-zinc-400 font-medium">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="text-red-400 hover:text-red-600 font-medium text-sm"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="pt-8 mt-8 border-t border-zinc-100">
              <div className="flex justify-between items-center mb-8">
                <span className="text-zinc-400 font-medium">Total:</span>
                <span className="text-3xl font-bold">${total}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full bg-[#7C3AED] text-white py-4 rounded-full font-bold text-sm hover:bg-[#6D28D9] transition-all mt-4 shadow-lg shadow-purple-100"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        ) : (
        <div className="text-center py-20">
            <BsCart3 className="text-6xl text-zinc-200 mx-auto mb-4" />
            <p className="text-zinc-400 text-xl font-medium">Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;