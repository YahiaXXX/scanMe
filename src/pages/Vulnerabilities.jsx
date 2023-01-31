import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useStateContext } from '../contexts/ContextProvider'
import {FiTarget} from "react-icons/fi"
import {BsCheck2All} from "react-icons/bs"
import {RiTimerFill} from "react-icons/ri"
import {motion} from "framer-motion"
import hexToRgba from "hex-to-rgba";

const columns = [

  { field: 'id', headerName: 'ID', width: 100,headerClassName: 'super-app-theme--header ',
  renderCell:(params)=>(
    <div className=' font-semibold' >
      {params.formattedValue}
    </div>
  )
 
},
  { field: 'domainURL', headerName: 'Domain URL', width: 300,headerClassName: 'super-app-theme--header',
  renderCell:(param)=>(
    <div className=' font-semibold text-black ' >
      {param.formattedValue}
    </div>

  )},
  { field: 'date', headerName: 'Date Start', width: 300,headerClassName: 'super-app-theme--header',
  renderCell:(param)=>(
    <div className=' font-semibold text-black ' >
      {param.formattedValue}
    </div>

  )},

   { field: 'status', headerName: 'Status', width: 100,headerClassName: 'super-app-theme--header',
   renderCell:(param)=>(
    <div className=' px-1 py-1 bg-green-500 bg-opacity-80  rounded-md border-color border-[1px]' > {param.formattedValue} </div>
   )
},
{ field: 'nbSubdomains', headerName: 'nb Subdomains', width: 200,headerClassName: 'super-app-theme--header',
  renderCell:(param)=>(
    <div className=' font-semibold text-black ' >
      {param.formattedValue}
    </div>

  )},
]

const data = [
  {
    id:1,
    domainURL:"yahia.com",
    date:"14-12-2022:10:20:23",
    status:"Finished",
    nbSubdomains:20
  },
  {
    id:2,
    domainURL:"yahia.com",
    date:"14-12-2022:10:20:23",
    status:"Finished",
    nbSubdomains:20
  },
  {
    id:3,
    domainURL:"yahia.com",
    date:"14-12-2022:10:20:23",
    status:"Finished",
    nbSubdomains:20
  },
  {
    id:4,
    domainURL:"yahia.com",
    date:"14-12-2022:10:20:23",
    status:"Finished",
    nbSubdomains:20
  },





]

export const  Card=({icon,text1,text2,color})=>(
    <div className=' flex justify-center items-center flex-col gap-3 rounded-xl bg-opacity-30 bg-slate-50 backdrop-blur-md hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer drop-shadow-lg h-[230px] md:w-[80%] w-[50%] ' >
       <motion.div whileHover={{scale:1.2}} style={{background:color}} className=' text-4xl p-2 rounded-full' >
        {icon}
         
       </motion.div>
         <div className=' flex flex-col gap-4 justify-center items-center' >
          <p className=' text-[20px] text-gray-600 font-semibold' >
             {text1}
          </p>
          <p className=' font-semibold text-3xl' ><span className=' text-black' >
            {text2}
           
            </span> </p>

         </div>
                   
 

        </div> 

)

function Vulnerabilities() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className=' w-full flex flex-col' >
    <div className=' mt-20 flex flex-col justify-start text-3xl ml-20' >
      <h1 className=' font-semibold' >Subsdomains history</h1> 
      <p className=' text-base text-[14px] text-gray-400 ' >Showing all found subdomains</p>
    
    </div>
   
    <div className=' h-[1px] w-full bg-gray-400 bg-opacity-30 mt-4 ' ></div>

    
    <div className=' w-full mt-2 flex md:flex-row flex-col ' >
      <div className=' gap-4 justify-center items-center md:w-[30%] ss:w-[50%] w-[70%] flex flex-col' >
      <Card 
    icon={<FiTarget/>} 
    text1="Number of targets"
    text2={data.length}
    color={currentColor}
    
    />
    <Card 
    icon={<BsCheck2All/>} 
    text1="Finished scans "
    text2="4"
    color={currentColor}
    
    />
    <Card 
    icon={<RiTimerFill/>} 
    text1="Pending scans"
    text2="0"
    color={currentColor}
    
    /> </div> 
       




<div className='ml-10 py-10 h-[85vh] md:w-[70%] w-[90%] flex justify-center items-center' >
      <DataGrid
        rows={data}
        getRowClassName={(params) => `super-app-theme--${(params.id)%2}`}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        onCellClick={()=>{}}
        sx={{
          boxShadow: 2,
          '& .super-app-theme--header': {
            backgroundColor: currentColor,
            color:"white"
          },
          '& .super-app-theme--0': {
            backgroundColor:"rgba(228,234,239,0.5)",
          },
          '& .super-app-theme--1': {
            backgroundColor:"rgba(228,234,239,0.2)",
          },
          '& .MuiDataGrid-cell:hover': {
            color: currentColor,
          },
          
        }}
      />

    </div>


    </div>

    <div className=' mt-20 flex flex-col justify-start text-3xl ml-20' >
      <h1 className=' font-semibold' >Vulnerabilities history</h1> 
      <p className=' text-base text-[14px] text-gray-400 ' >Showing all found vulnerabilities</p>
    
    </div>
















    <div className=' h-[1px] w-full bg-gray-400 bg-opacity-30 mt-4 ' ></div>
    <div className='w-full mt-2 flex md:flex-row flex-col ' >
      <div className=' gap-4 justify-center items-center md:w-[30%] ss:w-[50%] w-[70%] flex flex-col' >
      <Card 
    icon={<FiTarget/>} 
    text1="Number of targets"
    text2={data.length}
    color={currentColor}
    
    />
    <Card 
    icon={<BsCheck2All/>} 
    text1="Finished scans "
    text2="4"
    color={currentColor}
    
    />
    <Card 
    icon={<RiTimerFill/>} 
    text1="Pending scans"
    text2="0"
    color={currentColor}
    
    /> </div> 
       




<div className='ml-10 py-10 h-[85vh] md:w-[70%] w-[90%] flex justify-center items-center' >
      <DataGrid
        rows={data}
        getRowClassName={(params) => `super-app-theme--${(params.id)%2}`}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        onCellClick={()=>{}}
        sx={{
          boxShadow: 2,
          '& .super-app-theme--header': {
            backgroundColor: hexToRgba(currentColor).slice(0, hexToRgba(currentColor).length - 2)+"0.9)",
            color:"white"
          },
          '& .super-app-theme--0': {
            backgroundColor:"rgba(228,234,239,0.5)",
          },
          '& .super-app-theme--1': {
            backgroundColor:"rgba(228,234,239,0.2)",
          },
          '& .MuiDataGrid-cell:hover': {
            color: currentColor,
          },
          
        }}
      />

    </div>


    </div>








    </div>
    
    
  )
}

export default Vulnerabilities