import React from 'react'

function Footer() {
  return (
    <div className=' w-full flex md:justify-center justify-between items-center flex-col p-4' >
       <div className=' w-full flex sm:flex-row flex-col justify-between items-center my-2' >
           <div className=' flex justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full' >
            <p className=' text-gray-600 font-semibold text-base text-center mx-2 cursor-pointer' >Company</p>
            <p className=' text-gray-600 font-semibold text-base text-center mx-2 cursor-pointer' >About Us</p>
            <p className=' text-gray-600 font-semibold text-base text-center mx-2 cursor-pointer' >Team</p>
            <p className=' text-gray-600 font-semibold text-base text-center mx-2 cursor-pointer' >Pricing</p>

           </div>
       </div>
       <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-1' />
       <div className=' sm:w-[90%] w-full flex justify-between items-center mt-3' >
       <p className='text-gray-400 text-sm text-center' >ScanMe 2022</p>
       <p className=' text-gray-400 text-sm text-center' >All rights reserved</p>
       </div>

    </div>
  )
}

export default Footer