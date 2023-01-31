import React,{useEffect,useState,useContext} from 'react'
import styles from '../style'
import hero from "../assets/heroof.png"
import { useStateContext } from '../contexts/ContextProvider'
import {Spinner} from "../components/spinner/Spinner" ;
import Loader from "../components/Loader"
import Spinner3 from "../components/spinner/Spinner3"
import axios from 'axios';
import AuthContext from '../contexts/AuthContext';
import {Link} from "react-router-dom"
import {BsArrowRightCircle} from "react-icons/bs"
import {motion} from "framer-motion"
import { validLink } from '../components/Regex';

function Home() {
  const target ="http://165.232.152.255:8080/scanner/target/"
  const check = "http://165.232.152.255:8080/api/token/verify/"
   let {authTokens, logoutUser} = useContext(AuthContext);
  const [loading,setLoading]=useState(false)
  const [url,setUrl]=useState("")
  const {currentColor,setUrls} = useStateContext();
  const [id,setId] = useState(null);
  const [err,setErr]=useState(false)
  const [scanType,setScanType]=useState("scan_all")

  const checkToken= async ()=>{
    let res = await axios.post(check,{"token":authTokens.access})
    console.log("res check",res)
  }
 
  //  useEffect(()=>{

  //  checkToken();

  //  })

  const handleScan= async () =>{

    setLoading(true);
    if(url!=="" && validLink.test(url) ){
      setUrls(url)

      let res = await axios.post(target,{
        "url": url,
        "get_all_subdomains": true,
        "scan_type":scanType

      },{headers:{
        authorization:`Bearer ${authTokens.access}`
    }});
    console.log(res)
    if(res.status===201||res.status===200){
      setId(res.data.id);
      setLoading(false);

    }
    else{
    console.log("error");
    setLoading(false);}

    
    }
    else{
      setErr(true)
    } 

  }
 return (
  <section
    className={` flex md:flex-row flex-col sm:py-16 py-16  sm:px-4 px-2`}
  >
    <div
      className={`md:w-[60%] w-[100%] flex justify-center md:items-start items-center  z-[1] md:absolute flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row  justify-between  items-center w-full">
        <h1 className=" flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[50px] text-[32px] text-[#0A093D] dark:text-white ">
        Is your<br className="md:block hidden" /> web server's<br className="sm:block hidden" />
          <span className="text-[#0A093D] dark:text-gray-50 "> configuration secure? </span> <br />
          Find out for free.
          </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[400px] mt-7 dark:text-slate-200 `} >See the power of ScanMe, instantly. We don’t use the domain names or the test results, and we never will.</p>




      <div className=' w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-start items-center sm:mt-10 mt-5' >
      <select onChange={(e)=>setScanType(e.target.value)} className=' sm:w-[40%] ss:w-[50%] w-[80%] h-full py-2 bg-slate-100 drop-shadow-sm outline-none cursor-pointer mr-2' name="" id="">
  <option className=' cursor-pointer' value="scan_all">Find Subdomains and Risks</option>
  <option className=' cursor-pointer' value="sub_finder">Find Subdomains Only</option>
  <option className=' cursor-pointer' value="scan_only">Find Risks Only</option>

</select>
  <div className=' w-[100%] flex flex-row ' >
    

<input onChange={(e)=>{setUrl(e.target.value);setErr(false)}} type="text" placeholder='ENTER YOUR PUBLIC URL' className=' outline-none drop-shadow-lg px-4 ss:py-3 py-2 w-[100%]' /> 
<button onClick={handleScan} style={{background:currentColor}} className={`h-30 sm:w-40 w-20 rounded-sm text-white flex justify-center items-center `} >
  {loading ? <Spinner3 height={30} width={100} color="#FFF" glassColor="#FFF" />   : "SCAN" }
  
  
  </button>

  



</div>


      </div>

      { id!==null && 
<motion.div 
  className='  mt-4 w-full justify-center items-center flex ml-4'
  animate={{scale:[1,1.1,1]}}
  transition={{repeat:Infinity,duration:5}}
  
  >
 {scanType==="scan_all" && <Link className=' ml-4 gap-2 text-gray-700 text-[15px] hover:underline py-2 px-1 flex justify-center items-center' to={`result/${id}`} >
  CLICK HERE TO SEE RESULTS
  <BsArrowRightCircle/> </Link> } 
  {scanType==="sub_finder" && <Link className=' ml-4 gap-2 text-gray-700 text-[15px] hover:underline py-2 px-1 flex justify-center items-center' to={`subdomains/${id}`} >
  CLICK HERE TO SEE RESULTS
  <BsArrowRightCircle/> </Link> } 
  {scanType==="scan_only" && <Link className=' ml-4 gap-2 text-gray-700 text-[15px] hover:underline py-2 px-1 flex justify-center items-center' to={`risks/${id}`} >
  CLICK HERE TO SEE RESULTS
  <BsArrowRightCircle/> </Link> } 


</motion.div>
 }
    
     {err && <div className=' flex justify-center items-center mt-4  w-full' >
      <p className=' text-[15px] text-red-600' >Insert a valid link , please!</p>

     </div>  } 
      
      
    
    </div>

    
    
    <div className='flex-1 md:flex hidden ' ></div>

    <div className={` flex-[1.7] flex ${styles.flexCenter} md:my-0 my-10 relative`} >
      <img src={hero} alt="billing" className="w-[100%] h-[100%] relative" />
      
    </div>
    
  </section>
  )
 
}

export default Home