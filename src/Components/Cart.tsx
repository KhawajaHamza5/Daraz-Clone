import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../Image/img.png";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const url = "https://dummyjson.com/products";
  const getProducts = async () => {
    try {
      const resp = await axios.get(url);
      setProducts(resp.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <div className="w-4/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-p-4">
        {products.map((product) => (
          <div className="bg-white shadow-md rounded-lg p-4 h-[600px]">
            <img
              className="w-full h-60 object-cover mb-4"
              src={img}
              alt="Product"
            />

            <h2 className=" font-bold text-3xl">
              {product.title.length > 20
                ? product.title.substring(0, 23) + "..."
                : product.title}
            </h2>
            <p className="text-orange-600 text-2xl">${(product.price * 25) / 100}</p>
            <p > <span className="text-gray-500 line-through text-2xl">${product.price}</span> <span className="text-black text-2xl font-medium"> -25%</span> </p>
            <p className=" text-2xl text-black font-medium mt-2">
              {product.category}
            </p>
            <p className=" text-2xl text-black mt-2">
              {product.description.substring(0, 100)}...
            </p>
            <div className="w-full flex justify-center m-2">
            <input className="bg-orange-600 rounded-lg text-center text-white text-xl cursor-pointer w-2/4 h-10 self-center" type="button" value={"Add To Cart"} />
            </div>
          </div>
        
        ))}
      </div>
      </div>
    
    </>
  );
};

export default Cart;
