import React, { useState, useEffect,useContext } from "react";
import styles from "../style";
import hero from "../assets/Intersect.png";
import {Link} from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

import axios from 'axios'
import Spinner2 from "./spinner/Spinner2";

function LoginComponent() {

  let {loginUser,loginLoading} = useContext(AuthContext);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [remember, setRemember] = useState(false);

  const handleClick = () => {
    setRemember((prev) => !prev);
  };

  const handleLogin= async ()=>{
    loginUser(email,password)
  }
  return (
    <section className=" w-full h-[80vh] flex sm:flex-row flex-col" >
        
       <div className=" flex-[1] flex flex-col md:items-end items-center sm:justify-end justify-center sm:py-20 py-1 " >
            <div className="  flex flex-col sm:pl-7 sm:w-[80%] w-[90%] " >
                <div className=" flex flex-col sm:items-start items-center " >
                    <h2 className="font-roboto ss:leading-[70px] leading-[50px] ss:text-[40px] text-[32px] main-gradient font-bold" >Welcome Back</h2>
                    <p className="text-base text-gray-500" >Enter your email and password to sign in</p>
                </div>

                <div className=" w-full flex flex-col md:items-start items-center mt-10" >
                    <div className=" w-full flex flex-col justify-start" >
                        <p className=" text-[14px] font-semibold sm:mb-3 mb-2" >Email</p>
                        <input 
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" 
                        placeholder="Email"
                        className=" w-[100%] ss:w-[70%]  placeholder:text-gray-300 outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-400 px-2 py-1.5 mb-4 text-[#616161]"
                        />
                    </div>
                    <div className=" w-full flex flex-col justify-start mt-5">
                        <p className=" text-[14px] font-semibold sm:mb-3 mb-2">Password</p>
                        <input 
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password" 
                        placeholder="Password"
                        className=" w-[100%] ss:w-[70%]  placeholder:text-gray-300 outline-none rounded-md bg-transparent border-solid border-[1px] border-gray-400 px-2 py-1.5 mb-4 text-[#616161]"
                        />

                    </div>
                    <div className="flex flex-row w-full items-start ">
            <div
              className="flex flex-row bg-gray-700 h-[30px] w-[60px] rounded-2xl cursor-pointer"
              onClick={handleClick}
            >
              {!remember && (
                <div className=" h-[20px] w-[20px] ml-[5px]  mt-[5px] mb-[5px]  bg-white rounded-2xl"></div>
              )}
              {remember && (
                <div className=" h-[20px] w-[20px] ml-[35px]  mt-[5px] mb-[5px] bg-white rounded-2xl"></div>
              )}
            </div>
            <p className="ml-2">Remember me</p>
          </div>
                </div>



                <div className=" flex flex-col sm:items-start items-center mt-4 " >
                    <div className="flex flex-col ss:w-[70%]   gap-4" >

                    
                    <button 
                    onClick={handleLogin}
                    className=" flex justify-center items-center w-full font-roboto sm:mt-10 mt-5 h-10 bg-blue-gradient rounded-md font-semibold text-white " >
                    {loginLoading ? <Spinner2 height={25} width={25} color="#FFF" />      : "SIGN IN" }  </button>
                    
                    <div className=" w-full flex flex-row items-center justify-center gap-4" >
                     <p className="" >Don't have an account? 
                    <span className="main-gradient font-semibold"> <Link to="/register" >Sign up</Link></span>
                  </p>

                  </div>

                    </div>
                  
                  

                </div>





            </div>

        </div>


        <div className=" sm:flex hidden flex-1" >
            <img src={hero} alt="" className=" w-[100%] h-[100%] relative" />
            
        </div>  


    </section>
  )
}

export default LoginComponent