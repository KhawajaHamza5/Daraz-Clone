import React, { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import useUserStore from './Login/Zustrand/CreateLoginZustand';
// import { UserContext } from './Login/ContextLogin/CreateLoginContext';
const Header:React.FC=()=> {
  const {isLogined,totalProducts,productName,totalBill} = useUserStore();
  // const Context = useContext(UserContext)
  // if(!Context){
  //   throw new Error('Context Not Found')
  // }
  // const{totalProducts,productName} = Context;
  const [showCart, setShowCart] = useState(false);
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
           <TiShoppingCart onClick={toggleCart} className='text-white ml-2 cursor-pointer '  />

        </div>
    </div>
    <div className={`fixed top-15 right-0 w-1/3 h-screen overflow-scroll bg-white 
     text-orange-700 border-orange-700 shadow-lg border-2 transforma items-center justify-start  
     transition-transform duration-300 flex  flex-col  ease-in-out z-50 ${
          showCart ?  'translate-x-0' :'translate-x-full'
        }`}>
       {isLogined? 
      ( <div>
        <h2 className='text-orange-700 p-4'><b>Shopping Cart</b></h2>
        <p className='p-4'><b>Total Product:<span className='text-black'>{totalProducts}</span> </b></p>
        {productName.map((name)=>
        <p className='p-4'><b>Product Name:<span className='text-black'> {name}</span></b></p>)}
         <p className='p-4'><b>Total Bill:<span className='text-black'>{totalBill}</span> </b></p>
        </div>
     
      )
        :"LginFirst"}


        
        
      </div>
    
    </>
  )
}

export default Header


