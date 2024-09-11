import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import img from "../Image/img.png";
import { UserContext } from "./Login/ContextLogin/CreateLoginContext";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
}

const Cart: React.FC = () => {
  const Contextt = useContext(UserContext)
  if(!Contextt){
    throw new Error('Context Not Found')
  }
  const {isLogin,setTotalProducts,totalProducts,setProductName,productName} = Contextt
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

 
const divPerPage = 8
  const[currentPage, setCurrentPge] = useState(0)
  const divData= products.slice(
    currentPage* divPerPage, 
    (currentPage + 1) * divPerPage,
  )
const handlePage = (pageNumber:number)=>{
  setCurrentPge(pageNumber)
}
const totalPage = Math.ceil(products.length/divPerPage)
const handleAddCartButton=(name:string)=>{
  setProductName((prevProductNames: string[]) => [...prevProductNames, name]);
 setTotalProducts(totalProducts+1)
}
  return (
    <>
    <div className="flex flex-col  items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {divData.map((product) => (
          <div className="bg-slate-200 shadow-md box-border rounded-lg relative
          p-2 pb-10
           h-auto
          
          ">
            <img
              className="w-full h-40
               object-cover mb-4 rounded-t-lg"
              src={img}
              alt="Product"
            />

            <h2 className=" font-bold
             text-base">
              {product.title.length > 15
                ? product.title.substring(0, 15) + "..."
                : product.title}
            </h2>
            <p className="text-orange-600
             text-base">${(product.price * 25) / 100}</p>
            <p > <span className="text-gray-500 line-through
             text-base">${product.price}</span> <span className="text-black 
             text-base font-medium"> -25%</span> </p>
           
            <p className=" text-base text-black mt-2">
              {product.description.substring(0, 90)}...
            </p>
            <div className=" flex justify-center m-2">
            <input onClick={()=>handleAddCartButton(product.title)} hidden={!isLogin} className="absolute bottom-2 bg-orange-600 rounded-lg text-center text-white text-base cursor-pointer w-2/4 h-10 self-center" type="button" value={"Add To Cart"} />
            </div>
          </div>
        
        ))}
      </div>
      <div className="flex mt-6">
      <input
      disabled={currentPage<1}
      onClick={()=>handlePage(currentPage-1)} type="button" value="Prev" className="bg-orange-700 w-16 h-7 text-white 
      rounded-tr-lg
      mx-4 text-base cursor-pointer
      sm:w-20 sm:h-8 sm:text-lg
      md:w-24 md:h-9 md:text-xl
      lg:w-28 lg:h-10 lg:text-xl
      xl:w-32 xl:h-12 xl:text-2xl
      2xl:w-36 2xl:h-14 2xl:text-3xl
      " />
      <input 
      disabled={currentPage==totalPage-1}
      onClick={()=>handlePage(currentPage+1)}  type="button" value="Next" className="bg-orange-700 w-16 h-7 text-white 
      rounded-tl-lg
      mx-4 text-base cursor-pointer
        sm:w-20 sm:h-8 sm:text-lg
      md:w-24 md:h-9 md:text-xl
      lg:w-28 lg:h-10 lg:text-xl
      xl:w-32 xl:h-12 xl:text-2xl
      2xl:w-36 2xl:h-14 2xl:text-3xl
      " /> 
      </div>
      </div>
    
    </>
  );
};

export default Cart;
