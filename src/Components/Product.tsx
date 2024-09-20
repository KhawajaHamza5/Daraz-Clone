import React from "react";
import { useQuery } from "@tanstack/react-query"; 
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useUserStore from "./Login/Zustrand/CreateLoginZustand";
import Rating from "./rating";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  sku:string;
  rating: number;
  discountPercentage: number;
  stock: number;
  thumbnail: string;
  reviews:string;
  warrantyInformation:string;
  shippingInformation:string;
  returnPolicy:string;
  minimumOrderQuantity:number;
  meta:{
    qrCode:string
  }
}

const Product: React.FC = () => {
  const { setTotalProducts, totalProducts, setTotalBill, totalBill, setProducts, isLogined } = useUserStore();
  const params = useParams<{ productId: string }>(); 
  const fetchProduct = async (): Promise<Product> => {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
  
    const data = await response.json();
    return data;
  };

  const { data:product, isLoading, isError, error } = useQuery<Product, Error>({
    queryKey: ['product', params.productId],
    queryFn: fetchProduct,
    enabled: !!params.productId, 
  });

  if (isLoading) {
    return <div className="spinner w-full h-40 lg:h-52 2xl:h-60 object-contain mb-4 rounded-t-lg"></div>;
  }

  if (isError) {
    return <div className="text-white">Error: {error?.message}</div>;
  }
  const handleAddCartButton = (name: string,
     price: number, thumbnail: string, category: string, discountPercentage: number, id: number) => {
    setTimeout(() => {
      setProducts((prevProducts) => {
        const existingProduct = prevProducts.find(p => p.id === id);
        if (existingProduct) {
          return prevProducts.map(p => 
            p.id === id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
          );
        } else {
          return [...prevProducts, { name, price, thumbnail, category, discountPercentage, id, quantity: 1 }];
        }
      });
  
      setTotalProducts(totalProducts + 1);
      setTotalBill(totalBill + (price * discountPercentage / 100));
      toast.success("Added To Cart");
    }, 1000);
  };
  return (
    <div className="w-full grid grid-cols-1 gap-2 lg:grid-cols-2 p-2 sm:p-4  md:p-5 lg:p-8 xl:p-10 2xl:p-12 bg-white h-auto rounded">
        <div className="w-full flex  items-center justify-center bg-slate-300 h-auto sm:h-auto lg:h-4/5 xl:h-full rounded">
        <img
                    className="w-full h-auto sm:h-60 md:h-64 lg:h-72 xl:h-80 2xl:h-96
                    object-contain mb-4 rounded-t-lg"
                    src={product?.thumbnail}
                    alt="Product"
                  />
        </div>
        <div className=" h-auto mt-4 px-2 lg:mt-0 ">
      <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl sm:py-2"><b>{product?.title}</b></p>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl py-1">SKU:{product?.sku}</p>
      <div className="flex items-center">
      <span className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-1"><b> ${product?.price && product.discountPercentage && `${((product.price*product.discountPercentage)/100).toFixed(3)}`}</b></span>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ml-2 line-through text-gray-600 py-1">${product?.price}</p>
      </div>
      <div className="flex py-1  items-center">
      <p><Rating ratings={product?.rating ?? 0} /></p>
      <span className="text-gray-600  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pl-2 py-1">{product?.rating}</span>
      </div>
    
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl py-1">{product?.description}</p>
     
      <ul className="text-gray-600 list-disc text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl list-inside p-2">
        <li>
          {product?.warrantyInformation}
        </li>
        <li>
          {product?.shippingInformation}
        </li>
        <li>
        {product?.returnPolicy}
        </li>
        <li>Minimum Order {product?.minimumOrderQuantity}</li>
      </ul>
      <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
      <img
                    className="w-full h-full object-contain mb-4 rounded-t-lg"
                    src={product?.meta?.qrCode}
                    alt="Product"
                  />
                  </div>
                  <div className="flex py-2 group-hover:opacity-75 justify-center items-center w-full">
                <div className="flex w-full justify-center">
                  <input
                    onClick={() => handleAddCartButton(product?.title || "unknown Name", 
                      product?.price || 0, product?.thumbnail || "", product?.category ||'', product?.discountPercentage||0, product?.id||0)}
                    hidden={!isLogined}
                    className="bottom-2 bg-orange-600 rounded-lg text-center text-white text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl cursor-pointer  py-2 self-center w-full"
                    type="button"
                    value="Add To Cart"
                  />
                </div>
              </div>
        </div>


    </div>
  );
}

export default Product;
