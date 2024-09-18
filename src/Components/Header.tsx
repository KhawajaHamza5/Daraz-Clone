import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import useUserStore from './Login/Zustrand/CreateLoginZustand';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Header:React.FC=()=> {
const navigate = useNavigate();
const {isLogined,setIsLogined} = useUserStore()
const handleLogout = ()=>{
 
  toast.success("Logout successful")
  setIsLogined(false)
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
      const handleClick = ()=>{
        navigate("/Login");
      }
  return (
    <>
 
    <div className=' justify-between flex items-center bg-orange-700 
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
          <NavLink to="/"> 
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
    <div className={`fixed top-15 right-0 w-3/5 sm:w-1/2 md:w-2/5 lg:w-2/5
    xl:w-2/6  p-1 h-screen overflow-auto bg-slate-100 pb-20
     text-orange-700  shadow-lg  transforma items-center justify-start rounded-xl 
     transition-transform duration-300 flex  flex-col  ease-in-out z-50 ${
          showCart ?  'translate-x-0' :'translate-x-full'
        }`}>
       {isLogined? 
      ( <div className='w-full p-2 pt-6 pb-10'>
        <div className='flex w-full'>
        <h2 className='text-black flex pb-5 justify-center w-full text-lg lg:text-2xl xl:text-2xl 2xl:text-4xl'><b>Shopping Cart</b></h2>

        <RxCross2  
        className='text-black font-bold text-2xl lg:text-3xl
        2xl:text-4xl '
        onClick={toggleCart}/>
        <hr  />
                </div>
        <div className='flex w-full p-1 '>
          <div className='flex w-full flex-col text-start'>
          {/* <div className='flex'>
  <h1 className='flex w-3/5 justify-center text-sm lg:text-lg xl:text-xl 2xl:text-3xl'><b>Product Name</b></h1>
  <h1 className='flex w-2/5  justify-center text-sm lg:text-lg xl:text-xl 2xl:text-3xl'><b>Product Price</b></h1></div> */}
  <hr className="border-1 w-full"/>
  <div className='flex flex-col'>
  {products.map((product)=>
  <>
        {/* <div className='flex justify-between' key={key}>
        <span className='text-black w-2/4 text-sm lg:text-lg xl:text-xl 2xl:text-3xl'> {product.name}</span>
        <span className='text-black text-end w-2/4 text-sm lg:text-lg xl:text-xl 2xl:text-3xl'> ${product.price}</span>
        </div>
        <hr /> */}
        <div className='flex w-full bg-slate-200 h-[85px] sm:h-24
        md:h-24 lg:h-28
        xl:h-32 2xl:h-36 p-1 items-center justify-center rounded-2xl'>
          <div className='h-4/5 sm:h-5/6 w-1/4 justify-center items-center flex p-1 bg-slate-300 rounded-2xl'>
            <img className='h-5/6 w-auto'
             src={product.thumbnail}
             alt="product" />
          </div>
        <div className='text-start h-full  w-3/4 p-2 box-border'>
        <p className='text-slate-500 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-2xl'>
  {product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}
</p>
        <p className='text-black text-xs sm:text-sm font-medium lg:text-base xl:text-lg 2xl:text-2xl'>
          {product.name}
        </p>
        <p className='text-black sm:text-sm text-xs lg:text-base
        xl:text-lg 2xl:text-2xl'>
        {((product.price * product.discountPercentage ) / 100).toFixed(3)}$
        </p>
      
        </div>


        </div>
        <br />
        </>
        )}
        </div>
  </div>

</div>
        <hr  />
<div className='w-full text-black flex text-sm lg:text-lg xl:text-xl 2xl:text-3xl p-3'>
  <h1 className='w-3/5  '><b>Total Products</b></h1>
  <h1 className='w-2/5  '><b>Total Bill</b></h1>
  </div>  
  <div className='w-full flex text-sm text-black lg:text-lg xl:text-xl 2xl:text-3xl p-3'>
  <h1 className='w-3/5 '><b>{totalProducts}</b></h1>
  <h1 className='w-2/5 '><b>${totalBill}</b></h1>
  </div>   
    <hr className='border-1'/> 
       
        </div>
     
      )

        :
        <>
        <div className='flex-col flex items-center h-screen justify-between w-full'>
        <div className='w-full flex justify-end p-4 '>
         <RxCross2  
        className='text-black font-bold text-2xl lg:text-3xl
        2xl:text-4xl cursor-pointer '
        onClick={toggleCart}/>
        </div>
           <div className='w-full flex flex-col justify-center items-center'>
            <p className=' p-4 sm:text-base md:text-lg text-black lg:text-2xl xl:text-3xl 2xl:text-3xl'>Please Login First</p>
            
          <input 

          type="button" value="Login Now" 
         className='border-2 my-5 mx-1 rounded-xl bg-orange-700 text-white text-center cursor-pointer
          hover:border-orange-700  hover:text-orange-700  hover:bg-white 
          text-xs h-7 w-16
          sm:text-xs sm:h-8 sm:w-14
          md:text-sm md:h-9 md:w-16 
          lg:text-base lg:h-10 lg:w-20
          xl:text-lg xl:h-12 xl:w-20 
          2xl:text-xl 2xl:h-14 2xl:w-32'
          onClick={handleClick}/>
        
            </div>
            
        <hr  />
        </div>
        </>
    
         }


        
        
      </div>
    
    </>
  )
}

export default Header


