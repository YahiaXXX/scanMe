import React from 'react'
import { RegisterComponent } from '../components'
import hero from "../assets/Union.png"
import Footer from '../components/Footer'

function Register() {
  return (
    <div className=" px-4 w-full h-[100vh]">
    
    <div className={` mt-10 w-full h-[100vh] flex flex-col justify-center items-center relative`} >
    <div className=' w-full top-5 h-[450px] absolute z-[0]' >
        <img src={hero} className=" w-[100%] h-[100%] rounded-xl " />
      </div>
       
     <div className={`z-10 mb-5 w-full h-[100vh] `} >
       <RegisterComponent/>
     </div>
     
     <Footer/>
     

    

    </div>
    
    

</div>
  )
}

export default Register