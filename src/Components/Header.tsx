import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
const Header:React.FC=()=> {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
        setShowCart(!showCart);
      };
  return (
    <div className='container w-screen'>
    <div className='w-screen justify-between flex items-center bg-orange-700 box-border
     text-3xl px-2 h-[63px]
     md:h-[70px] md:text-[33px] md:px-3 
     lg:h-[80px] lg:text-[36px] lg:px-4
     xl:h-[85px] xl:text-[39px] xl:px-5 
     2xl:h-[90px] 2xl:text-[42px] 2xl:px-6 
        '>
        <div><img className='
        h-9  md:h-10  lg:h-11   xl:h-12' 
        src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="Daraz Logo" /></div>
        <div className='flex h-full items-center'>
        <input type="button" value="Home" 
        className='border-2 m-5 rounded-xl bg-white text-orange-700 text-center cursor-pointer
         hover:border-white  hover:text-white  hover:bg-orange-700 
         text-sm h-8 w-14
         md:text-base md:h-9 md:w-16 
         lg:text-lg lg:h-10 lg:w-20
         xl:text-2xl xl:h-12 xl:w-20 
         2xl:text-2xl 2xl:h-14 2xl:w-24'></input>
          <input type="button" value="Login" 
        className='border-2 m-5 rounded-xl bg-white text-orange-700 text-center cursor-pointer
         hover:border-white  hover:text-white  hover:bg-orange-700 
         text-sm h-8 w-14
         md:text-base md:h-9 md:w-16 
         lg:text-lg lg:h-10 lg:w-20
         xl:text-2xl xl:h-12 xl:w-20 
         2xl:text-2xl 2xl:h-14 2xl:w-24'></input>
           <TiShoppingCart onClick={toggleCart} className='text-white ml-5 cursor-pointer '  />

        </div>
    </div>
    <div className={`fixed top-15 right-0 h-auto w-48 bg-white text-orange-700 border-orange-700 shadow-lg border-2 transform transition-transform duration-300 flex   justify-center flex-col items-center ease-in-out ${
          showCart ? 'translate-x-0' : 'translate-x-full'
        }`}>
       
        <h2 className='text-orange-700 p-4'><b>Cart</b></h2>
        <p className='p-4'><b>Product Name:</b></p>
        <p className='p-4'><b>Total Product:</b></p>
      </div>
    </div>
  )
}

export default Header

// import React, { useState } from 'react';
// import { TiShoppingCart } from "react-icons/ti";

// const Header: React.FC = () => {
//   // State to toggle cart visibility
//   const [showCart, setShowCart] = useState(false);

//   // Function to toggle the cart
//   const toggleCart = () => {
//     setShowCart(!showCart);
//   };

//   return (
//     <div className='container w-screen mb-4'>
//       <div className='w-full justify-between flex items-center bg-orange-700 box-border text-3xl px-2 h-[63px]
//         md:h-[66px] md:text-[33px] md:px-3 
//         lg:h-[70px] lg:text-[36px] lg:px-4
//         xl:h-[75px] xl:text-[39px] xl:px-5 
//         2xl:h-[80px] 2xl:text-[42px] 2xl:px-6'>
        
//         {/* Logo */}
//         <div>
//           <img className='h-9 md:h-10 lg:h-11 xl:h-12' 
//           src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" 
//           alt="Daraz Logo" />
//         </div>

//         {/* Login and Cart */}
//         <div className='flex h-full items-center'>
//           <input 
//             type="button" 
//             value="Login" 
//             className='border-2 font-bold rounded-xl bg-white text-orange-700 text-center
//               hover:border-white hover:text-white hover:bg-orange-700 text-base h-8 w-14
//               md:text-lg md:h-9 md:w-16 
//               lg:text-2xl lg:h-10 lg:w-20
//               xl:text-2xl xl:h-12 xl:w-20 
//               2xl:text-3xl 2xl:h-14 2xl:w-24' 
//           />
//           {/* Shopping Cart Icon */}
//           <TiShoppingCart 
//             className='text-white ml-5 cursor-pointer' 
//             onClick={toggleCart} 
//           />
//         </div>
//       </div>

//       {/* Sliding Cart Panel */}
//       <div 
//         className={`fixed top-10 right-10 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//           showCart ? 'translate-x-0' : 'translate-x-full'
//         }`}>
//         {/* Cart Content */}
//         <h2 className='text-orange-700 p-4'>Your Cart</h2>
//         {/* Add cart items here */}
//         <p className='p-4'>Your cart is empty.</p>
//       </div>
//     </div>
//   );
// };

// export default Header;
