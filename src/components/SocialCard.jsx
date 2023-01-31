import React from 'react'

function SocialCard({url}) {
  return (
    <div className=' flex justify-center items-center ss:w-[70px] w-[50px] ss:h-[55px] h-[35px] rounded-md border-color border-[0.25px] cursor-pointer' >
        <div className=' w-6 h-6' >
           <img src={url}/>
        </div>

    </div>
  )
}

export default SocialCard