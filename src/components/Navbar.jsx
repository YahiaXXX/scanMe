import React,{useEffect,useContext,useState} from 'react'
import AuthContext from '../contexts/AuthContext';
import {useStateContext} from "../contexts/ContextProvider"
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import {MdNotificationsActive} from "react-icons/md"
import searchsvg from "../assets/search.svg"
import {MdOutlineLogout} from "react-icons/md"
import {motion} from "framer-motion"
import {AiOutlineLogout} from "react-icons/ai"
import { Link } from 'react-router-dom';
import {FiTarget} from "react-icons/fi"
import {BiSearchAlt} from "react-icons/bi"
import {AiOutlineHome} from "react-icons/ai"
import hexToRgba from "hex-to-rgba";



const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

function Navbar() {
  const {logoutUser,user} = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const {activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,screenSize,setScreenSize,currentColor,setThemeSettings} = useStateContext();

const handleLogout=()=>{
  logoutUser();
}

useEffect(()=>{
const handleResize = ()=> setScreenSize(window.innerWidth)
window.addEventListener('resize',handleResize)

handleResize();
return ()=>window.removeEventListener('resize',handleResize)
},[])
useEffect(()=>{
if(screenSize <= 1140 ){setActiveMenu(false)}
else{setActiveMenu(true)}
},[screenSize])
  return (
    <nav className="drop-shadow-2xl w-full flex justify-between py-4 items-center">
      <div className="flex-[0.7] px-4 flex  justify-start items-center relative">
      <input className=' w-[60%] px-10 drop-shadow-md py-2 rounded-2xl border-color border-[0.25px] outline-none' type="search" placeholder='Search...'  />
      <img src={searchsvg} className="absolute ml-2 w-6 h-6" alt="search" />
      </div>

      <div className='flex-[0.9] md:pl-4 pl-0 md:flex hidden  justify-start xl:justify-center flex-row' >
      <ul className=" text-black flex list-none flex-row justify-between items-center flex-initial ml-10">
        
        <motion.li 
        whileHover={{scale:1.1}} 
        transition={{duration:0.1}}
        onClick={handleLogout} 
        style={{background:currentColor}} 
        className=" hover:backdrop-blur-md text-white py-2 px-7 flex flex-row justify-center items-center gap-2 mx-4 rounded-full cursor-pointer">
          Logout<span><AiOutlineLogout/></span> 
        </motion.li>
      </ul> 
      <div className=" hover:cursor-pointer">
              <TooltipComponent content="Settings" position="BottomCenter">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{borderRadius: "50%" }}
                  className=" text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray hover:cursor-pointer  text-gray-700"
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>

            
        <div className='' >
         <button style={{borderRadius: "50%" }}  className=" text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray hover:cursor-pointer  text-gray-700">
          <MdNotificationsActive/>

          </button>  
        </div> 

        
        
        </div>  



      <div className="flex relative">
        {toggle ? (
          ""
        ) : (
          <HiMenuAlt4
          fontSize={28}
            className="text-gray-700 md:hidden cursor-pointer "
            onClick={()=>setToggle(true)}
          />
        )}



        { toggle && (
          <ul style={{background:hexToRgba(currentColor).slice(0, hexToRgba(currentColor).length - 2)+"0.8)" }} className=" z-[1000] fixed top-0 -right-2 p-3 w-[70vw] sm:w-[50vw] h-screen shadow-2xl md:hidden list-none
           flex flex-col justify-start items-end rounded-md text-black animate-slideright" >
            <li className=" text-xl w-full my-2" >
              <AiOutlineClose onClick={()=>setToggle(false)} />
            </li>
            <li className={` flex flex-row justify-center items-center gap-2 mx-4 cursor-pointer my-2 text-black text-lg`}> 
            <Link onClick={()=>setToggle(false)} className=' flex flex-row gap-2 justify-center items-center' to={"/"} >
              <AiOutlineHome/> Home</Link></li>

            <li className={` flex flex-row justify-center items-center gap-2 mx-4 cursor-pointer my-2 text-black text-lg`}> 
            <Link onClick={()=>setToggle(false)} className=' flex flex-row gap-2 justify-center items-center' to={"/scan"} >
              <FiTarget/> Scan</Link></li>
            {/* <li className={` flex flex-row justify-center items-center gap-2 mx-4 cursor-pointer my-2 text-black text-lg`}>
               <Link onClick={()=>setToggle(false)}  className=' flex flex-row gap-2 justify-center items-center' to={"All Targets"} >
                <BiSearchAlt/> Targets</Link> </li>
            <li className={` flex flex-row justify-center items-center gap-2 mx-4 cursor-pointer my-2 text-black text-lg`}> 
            <Link onClick={()=>setToggle(false)}  className=' flex flex-row gap-2 justify-center items-center' to={"Vulnerabilities"} >
              <MdNotificationsActive/> Vunrabilities</Link> </li> */}
            <li onClick={()=>{
            setToggle(false);
            setThemeSettings(true);
            }}  className={`flex flex-row justify-center items-center gap-2 mx-4 cursor-pointer my-2 text-black text-lg`}> <FiSettings/> Settings</li>
            <li className={` flex flex-row justify-center items-center gap-2 mx-4 cursor-pointer my-2 text-black text-lg`}> <MdNotificationsActive/> Notifications</li>
            <li onClick={handleLogout} className={` flex flex-row justify-center items-center gap-2 mx-4 cursor-pointer my-2 text-black text-lg`}> <MdOutlineLogout/> Logout</li>
            
          </ul>
        )

        }
      </div>
    </nav>
  )
}

export default Navbar