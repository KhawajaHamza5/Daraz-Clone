import React from 'react'

const Footer:React.FC=()=> {
  return (
    <div className='w-full flex text-white items-center justify-center bg-orange-700 
     px-2 h-[63px]
     text-sm
     md:h-[70px] md:text-sm md:px-3 
     lg:h-[80px] lg:text-base lg:px-4
     xl:h-[85px] xl:text-xl xl:px-5 
     2xl:h-[90px] 2xl:text-2xl 2xl:px-6'>
          <p >
          &copy; Daraz. All rights reserved.
        </p>
     </div>
  )
}

export default Footer