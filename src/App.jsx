import { useState } from "react";
import { Suspense } from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Stats from "./Components/Stats";
import Steps from "./Components/Steps";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pricing from "./Components/Pricing";
import Newsletter from "./Components/Newsletter";




const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = getData();

function App() {
  const [activeTab, setActiveTab] = useState("model");
console.log(activeTab);

  const [carts, setCarts] = useState([]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar carts={carts}/>
      <Banner />
      <Stats />
  
      <div className="text-center mt-16 px-4">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">Premium Digital Tools</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Choose from our curated collection of premium digital products designed <br/> to boost your productivity and creativity.
        </p>

       
        <div className="inline-flex p-1 bg-white border border-gray-100 shadow-sm rounded-full mb-10">
          <button
            onClick={() => setActiveTab("model")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === "model" 
              ? "bg-[#7C3AED] text-white shadow-md" 
              : "bg-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
              activeTab === "cart" 
              ? "bg-[#7C3AED] text-white shadow-md" 
              : "bg-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      <div className="pb-20">
     {activeTab === "model" ? (
  <Suspense fallback={<div className="text-center py-20 text-xl">Loading Products...</div>}>
    <Products dataPromise={dataPromise} carts={carts} setCarts={setCarts} />
  </Suspense>
) : (
  <Cart carts={carts} setCarts={setCarts} />
)}
      </div>

      <Steps />
    <Pricing/>
    <Newsletter/>
      <Footer />
      <ToastContainer position="top-right" autoClose={1500} />
      
    </div> 
  );
}

export default App;