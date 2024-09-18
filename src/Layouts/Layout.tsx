
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Layout() {
  return (
    <>
<div className='flex flex-col justify-between min-h-screen max-h-full'>
    <Header/>

    <div className='bg-black pb-10 h-full flex justify-center pt-16'>
    <div className=' bg-black w-screen h-full flex flex-col justify-center items-center' style={{width:"80%"}}>
       
        <Outlet/>
    
    </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Layout