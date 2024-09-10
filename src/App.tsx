import React from 'react'
import Header from './Components/Header'
import LoginPage from './Components/Login/ContextLogin/LoginPage'
import Cart from './Components/Cart'

const App:React.FC=()=> {
  return (
    <>
 <div className='bg-black w-screen h-auto flex flex-col ' >
 <Header/>
 <div className='w-screen  items-center py-10 flex flex-col'>

 <Cart/>

<LoginPage/>
</div>



</div>
   
    </>
  
  )
}

export default App