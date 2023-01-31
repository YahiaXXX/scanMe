import React from 'react'
import {motion} from "framer-motion"

function ResultCard({color,title,display,icon}) {
  return (
    <div className=' flex justify-center items-center flex-col gap-3 rounded-xl bg-opacity-20 hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer bg-slate-100 backdrop-blur-md drop-shadow-lg h-[200px] md:w-[90%] w-[60%]' >
        <div>
          <motion.div whileHover={{scale:1.2}} style={{background:color}} className=' text-4xl rounded-full p-2' >{icon}</motion.div>
        </div>
         <div className=' flex flex-col justify-start items-center' >
          <p className=' text-[20px] text-gray-600 font-semibold' >{title}
          </p>
          <p className=' font-semibold text-[30px]' ><span className=' text-black' >{display}</span> </p>

         </div>
        </div> 
  )
}

export default ResultCard