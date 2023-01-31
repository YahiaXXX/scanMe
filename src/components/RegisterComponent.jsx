import React,{useState} from 'react'
import SocialCard from './SocialCard'
import apple from "../assets/logo-apple.svg"
import facebook from "../assets/logo-facebook.svg"
import google from "../assets/logo-google.svg"
import hero from "../assets/curved14.jpg"
import  { validEmail,validPassword } from "./Regex"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner2 from "../components/spinner/Spinner2"


function RegisterComponent() {
  const [emailErr,setEmailErr]=useState(false);
  const [passwordErr,setPasswordErr]=useState(false);
  const [nameErr,setNameErr]=useState(false)
  const url = "http://165.232.152.255:8080/users/signup/"
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);


  const validate=()=>{
    if(name.length<=6){
      setNameErr(true);
      return false;
    }
    if (!validEmail.test(email)) {
      setEmailErr(true);
      return false;
   }
   if (!validPassword.test(password)) {
      setPasswordErr(true);
      return false;
   }
   return true;
  }
  const handleRegister = async ()=>{
    setLoading(true)
    let res = await axios.post(url,
        {
          "full_name": name,
          "email": email,
          "password": password
        }
        )
       if(res.status===201){
        console.log(res)
        setLoading(false)
 
      } 
      else{
        console.log("error")
        setLoading(false)
      }

    
  }
  return (
     <section className=' w-full h-[100vh] flex-col flex justify-center items-center' >
      

      <div className=' xl:w-[50%] sm:w-[60%] ss:w-[70%] w-[90%] flex flex-col justify-center items-center mt-20 ' >
        <div className='flex flex-col justify-center items-center gap-4 ' >
          <h1 className="font-roboto ss:leading-[70px] leading-[50px] ss:text-[45px] text-[40px] text-white font-bold" >Welcome!</h1>
          <p className=' text-center text-base text-white font-semibold' >Use these awesome forms to login or create new account in your project <br /> for free.</p>
        </div>


        <div className='flex flex-col sm:h-[600px] h-[500px] drop-shadow-lg md:w-[60%]  w-[90%] px-4 sm:py-4 py-0 bg-white backdrop-blur-2xl rounded-xl items-center sm:mt-10 mt-2   ' >

          <h2 className=' font-semibold text-[20px]' >Register with</h2>

          <div className=' flex flex-row justify-center items-center ss:gap-3 gap-2 sm:mt-8 mt-4' >
            <SocialCard url={apple} />
            <SocialCard url={facebook} />
            <SocialCard url={google} />

          </div>
          <div className=' w-full my-4' >
            <p 
            className=" text-gray-500 font-semibold mx-2 text-center relative before:content-[''] before:block before:w-[40%] before:h-[1px] before:absolute
             before:bg-gray-100 before:left-5 before:top-[55%] after:content-[''] after:block after:w-[40%] after:h-[1px] after:absolute
             after:bg-gray-100 after:right-5 after:top-[55%] " >or</p>

          </div>
          <div className=' px-4 w-full flex flex-col sm:gap-2 gap-1 md:mt-8 mt-4' >
            <input 
            onChange={(e)=>setName(e.target.value)}
            type="text" 
            placeholder='Name'
            className=" w-[100%]  placeholder:text-gray-300 outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
            <input 
            onChange={(e)=>setEmail(e.target.value)}
            type="email" 
            placeholder='Email'
            className=" w-[100%]   placeholder:text-gray-300 outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
            <input 
            onChange={(e)=>setPassword(e.target.value)}
            type="password" 
            placeholder='Password'
            className=" w-[100%]   placeholder:text-gray-300 outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-200 px-2 py-1.5 mb-4 text-[#616161]"
            />
            <div className=' flex flex-row gap-2' >
              <input type="checkbox" className='cursor-pointer border-[1px] rounded-xl w-4' />
              <p className=' text-[15px]' >I agree the <span className=' font-semibold' > <a href="">Terms and Conditions</a> </span> </p>

            </div>
          </div>

          <div className=' w-full flex flex-col sm:gap-4 gap-2 justify-center items-center' >
            <div className=' flex flex-row bg-red-500' >

            </div>
            <button 
            onClick={handleRegister}
            className=" flex justify-center items-center w-full font-roboto sm:mt-8 mt-3 h-10  bg-[#222743] font-semibold text-[12px] rounded-md text-white " >
              { loading ? <Spinner2 height={25} width={25} color="#FFF" />      : "SIGN UP"}
              </button>
            <p>Already have an account? <span className=' font-semibold' > <Link to={"/login"} >Sign in</Link> </span> </p>

          </div>



        </div>
      </div>





     </section>
  )
}

export default RegisterComponent