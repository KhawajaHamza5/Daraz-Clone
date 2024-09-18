import React from 'react'
import Cart from './Cart'
import useUserStore from './Login/Zustrand/CreateLoginZustand'
import ImageSlider from './ImageSlider';

const Home:React.FC=()=> {
  const {showCart} = useUserStore();
  return (
   
   
    <>

  {showCart?(<div className='bg-black opacity-35 w-full pointer-events-none overflow-hidden fixed top-96  left-10 sm:left-16 md:left-20 lg:left-24 xl:left-32 2xl:left-40'>
    <Cart/></div> ):
   <>
   <ImageSlider/>
  <Cart/>

  </>}
   
   </>
  )
}

export default Home