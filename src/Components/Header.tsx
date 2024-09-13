import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import useUserStore from './Login/Zustrand/CreateLoginZustand';
// import { UserContext } from './Login/ContextLogin/CreateLoginContext';
const Header:React.FC=()=> {
  const isLogined = JSON.parse(localStorage.getItem('isLogined') || 'false');
const handleLogout = ()=>{
  localStorage.setItem('isLogined', JSON.stringify(false));
}
  const {totalProducts,products,totalBill,setShowCart,showCart} = useUserStore();
  // const Context = useContext(UserContext)
  // if(!Context){
  //   throw new Error('Context Not Found')
  // }
  // const{totalProducts,productName} = Context;
 
  const toggleCart = () => {
    setShowCart(!showCart);
      };
  return (
    <>
 
    <div className='z-[999px] justify-between flex items-center bg-orange-700 
     text-3xl px-2 h-[63px]
     md:h-[70px] md:text-[33px] md:px-3 
     lg:h-[80px] lg:text-[36px] lg:px-4
     xl:h-[85px] xl:text-[39px] xl:px-5 
     2xl:h-[90px] 2xl:text-[42px] 2xl:px-6 
        '>
        <div><img className='
        h-8 sd:h-9 md:h-10  lg:h-11   xl:h-12' 
        src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="Daraz Logo" /></div>
        <div className='flex h-full items-center'>
       <NavLink to="/">
        <input type="button" value="Home" 
        className='border-2 my-5 mx-1 rounded-xl bg-white text-orange-700 text-center cursor-pointer
         hover:border-white  hover:text-white  hover:bg-orange-700 
         text-xs h-7 w-12
         sm:text-sm sm:h-8 sm:w-14
         md:text-base md:h-9 md:w-16 
         lg:text-lg lg:h-10 lg:w-20
         xl:text-2xl xl:h-12 xl:w-20 
         2xl:text-2xl 2xl:h-14 2xl:w-24'/>
         </NavLink>
         
         {isLogined?
         (
          <>
          <NavLink to="/Login"> 
       <input 
       onClick={handleLogout}
       type="button" value="Logout" 
      className='border-2  my-5 mx-1 rounded-xl bg-white text-orange-700 text-center cursor-pointer
       hover:border-white  hover:text-white  hover:bg-orange-700 
       text-xs h-7 w-12
       sm:text-sm sm:h-8 sm:w-14
       md:text-base md:h-9 md:w-16 
       lg:text-lg lg:h-10 lg:w-20
       xl:text-2xl xl:h-12 xl:w-20 
       2xl:text-2xl 2xl:h-14 2xl:w-24'/>
        </NavLink>
          </>
         )
         :(
          <NavLink to="/Login"> 
          <input 
          type="button" value="Login" 
         className='border-2  my-5 mx-1 rounded-xl bg-white text-orange-700 text-center cursor-pointer
          hover:border-white  hover:text-white  hover:bg-orange-700 
          text-xs h-7 w-12
          sm:text-sm sm:h-8 sm:w-14
          md:text-base md:h-9 md:w-16 
          lg:text-lg lg:h-10 lg:w-20
          xl:text-2xl xl:h-12 xl:w-20 
          2xl:text-2xl 2xl:h-14 2xl:w-24'/>
           </NavLink>
             
         )}
        
           <TiShoppingCart onClick={toggleCart} className='text-white ml-2 cursor-pointer '  />

        </div>
    </div>
    <div className={`fixed top-15 right-0 w-3/5 sm:w-1/2 lg:w-2/5
    xl:w-2/6  p-1 h-screen overflow-auto bg-white pb-20
     text-orange-700 border-orange-700 shadow-lg  transforma items-center justify-start rounded-xl 
     transition-transform duration-300 flex  flex-col  ease-in-out z-50 ${
          showCart ?  'translate-x-0' :'translate-x-full'
        }`}>
       {isLogined? 
      ( <div className='w-full p-2 pb-4'>
        <h2 className='text-orange-700 flex pb-2 justify-center w-full text-lg lg:text-xl xl:text-2xl 2xl:text-4xl'><b>Shopping Cart</b></h2>
        <hr  />
        <div className='flex w-full p-1 '>
          <div className='flex w-full flex-col text-start'>
          <div className='flex'>
  <h1 className='flex w-3/5 justify-center text-sm lg:text-lg xl:text-xl 2xl:text-3xl'><b>Product Name</b></h1>
  <h1 className='flex w-2/5  justify-center text-sm lg:text-lg xl:text-xl 2xl:text-3xl'><b>Product Price</b></h1></div>
  <hr className="border-1 w-full"/>
  <div className='flex flex-col'>
  {products.map((product,key)=>
  <>
        <div className='flex justify-between' key={key}>
        <span className='text-black w-2/4 text-sm lg:text-lg xl:text-xl 2xl:text-3xl'> {product.name}</span>
        <span className='text-black text-end w-2/4 text-sm lg:text-lg xl:text-xl 2xl:text-3xl'> ${product.price}</span>
        </div>
        <hr />
        </>
        )}
        </div>
  </div>

</div>
        <hr  />
<div className='w-full flex text-sm lg:text-lg xl:text-xl 2xl:text-3xl'>
  <h1 className='w-3/5  '><b>Total Products</b></h1>
  <h1 className='w-2/5  '><b>Total Bill</b></h1>
  </div>  
  <div className='w-full flex text-sm text-black lg:text-lg xl:text-xl 2xl:text-3xl'>
  <h1 className='w-3/5 '><b>{totalProducts}</b></h1>
  <h1 className='w-2/5 '><b>${totalBill}</b></h1>
  </div>   
    <hr className='border-1'/> 
       
        </div>
     
      )
        :"LginFirst"}


        
        
      </div>
    
    </>
  )
}

export default Header


