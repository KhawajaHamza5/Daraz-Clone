import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import Rating from "./rating";
import useUserStore from "./Login/Zustrand/CreateLoginZustand";
import "./Loader.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  discountPercentage: number;
  stock: number;
  thumbnail: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products?limit=150");
  const data = await response.json();
  return data.products;
};

const Cart: React.FC = () => {
  const { setTotalProducts, totalProducts, setTotalBill, totalBill, setProducts, isLogined } = useUserStore();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    return [...products].sort((a, b) => {
      const discountedPriceA = a.price * (a.discountPercentage / 100);
      const discountedPriceB = b.price * (b.discountPercentage / 100);
      return sortOrder === 'asc' ? discountedPriceA - discountedPriceB : discountedPriceB - discountedPriceA;
    });
  }, [products, sortOrder]);

  const divPerPage = 12;
  const divData = useMemo(() => sortedProducts.slice(
    currentPage * divPerPage,
    (currentPage + 1) * divPerPage
  ), [sortedProducts, currentPage]);

  const handlePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPage = Math.ceil(sortedProducts.length / divPerPage);

  const handleToggleSort = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleAddCartButton = (name: string, price: number, thumbnail: string, category: string, discountPercentage: number, id: number) => {
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

  if (isLoading) {
    return <div className="spinner w-full h-40 lg:h-52 2xl:h-60 object-contain mb-4 rounded-t-lg"></div>;
  }

  if (isError) {
    return <div className="text-white">Error: {error?.message}</div>;
  }

  return (
    <div className="flex flex-col items-center mb-4">
      <div className="flex mb-4">
        <button
          onClick={handleToggleSort}
          className="bg-orange-700 w-16 h-7 text-white disabled:bg-orange-700 disabled:opacity-70 disabled:text-gray-200 disabled:cursor-not-allowed rounded mx-4 text-base cursor-pointer sm:w-20 sm:h-8 sm:text-lg md:w-24 md:h-9 md:text-xl lg:w-28 lg:h-10 lg:text-xl xl:w-32 xl:h-12 xl:text-2xl 2xl:w-36 2xl:h-14 2xl:text-3xl"
        >
          Sort It
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-2 md:gap-3 md:gap-y-5 sm:gap-y-4 p-4 xl:gap-4 xl:gap-y-5">
        {divData.length > 0 ? (
          divData.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="bg-slate-100 group shadow-md box-border rounded-lg p-4 sm:p-2  space-y-5 flex flex-col justify-between"
            >
              <div className="group-hover:opacity-70">
                <div className="bg-slate-200 rounded-lg p-1">
                  <img
                    className="w-full h-40 lg:h-52 2xl:h-60 object-contain mb-4 rounded-t-lg"
                    src={product.thumbnail}
                    alt="Product"
                  />
                </div>
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                  {product.title}
                </h2>
                <div className="flex">
                  <p className="text-orange-600 pr-4 text-base lg:text-xl 2xl:text-2xl">
                    ${((product.price * product.discountPercentage) / 100).toFixed(3)}
                  </p>
                  <p>
                    <span className="text-gray-500 line-through text-sm lg:text-xl 2xl:text-2xl">
                      ${product.price}
                    </span>{" "}
                    <span className="text-black text-sm font-medium lg:text-xl 2xl:text-2xl">
                      {product.discountPercentage}%
                    </span>{" "}
                  </p>
                </div>
                <p><Rating ratings={product.rating} /></p>
                <p className="text-black text-base font-medium lg:text-xl 2xl:text-2xl">
                  In Stock: {product.stock}
                </p>
                <p className="text-base text-black mt-2 lg:text-xl 2xl:text-2xl">
                  {product.description}
                </p>
              </div>
              <div className="flex group-hover:opacity-75 justify-center items-center w-full">
                <div className="flex justify-center">
                  <input
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddCartButton(
                        product.title,
                        product.price,
                        product.thumbnail,
                        product.category,
                        product.discountPercentage,
                        product.id
                      );
                    }}
                    hidden={!isLogined}
                    className="bottom-2 bg-orange-600 rounded-lg text-center text-white text-base cursor-pointer px-5 py-2 self-center"
                    type="button"
                    value="Add To Cart"
                  />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>

      <div className="flex mt-6">
        <input
          disabled={currentPage < 1}
          onClick={() => handlePage(currentPage - 1)}
          type="button"
          value="Prev"
          className="bg-orange-700 w-16 h-7 text-white disabled:bg-orange-700 disabled:opacity-70 disabled:text-gray-200 disabled:cursor-not-allowed rounded-tr-lg mx-4 text-base cursor-pointer sm:w-20 sm:h-8 sm:text-lg md:w-24 md:h-9 md:text-xl lg:w-28 lg:h-10 lg:text-xl xl:w-32 xl:h-12 xl:text-2xl 2xl:w-36 2xl:h-14 2xl:text-3xl hover:opacity-70"
        />
        <input
          disabled={currentPage === totalPage - 1}
          onClick={() => handlePage(currentPage + 1)}
          type="button"
          value="Next"
          className="bg-orange-700 w-16 h-7 text-white disabled:bg-orange-700 disabled:opacity-70 disabled:text-gray-200 disabled:cursor-not-allowed rounded-tl-lg mx-4 text-base cursor-pointer sm:w-20 sm:h-8 sm:text-lg md:w-24 md:h-9 md:text-xl lg:w-28 lg:h-10 lg:text-xl xl:w-32 xl:h-12 xl:text-2xl 2xl:w-36 2xl:h-14 2xl:text-3xl hover:opacity-70"
        />
      </div>
    </div>
  );
};

export default Cart;
