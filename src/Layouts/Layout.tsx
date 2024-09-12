import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

function Layout() {
  return (
    <>

    <Header/>

    <div className='bg-black pb-10 h-full flex justify-center pt-16'>
    <div className=' bg-black w-screen h-full flex flex-col justify-center items-center' style={{width:"80%"}}>
        <Outlet/>
    </div>
    </div>
    </>
  )
}

export default Layout