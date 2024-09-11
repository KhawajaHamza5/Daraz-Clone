import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import { UserContextProvider } from '../Components/Login/ContextLogin/CreateLoginContext'

function Layout() {
  return (
    <>
    <UserContextProvider>
    <Header/>

    <div className='bg-black flex justify-center'>
    <div className=' bg-black w-screen h-screen flex flex-col justify-center items-center' style={{width:"80%"}}>
        <Outlet/>
    </div>
    </div>
    </UserContextProvider>
    </>
  )
}

export default Layout