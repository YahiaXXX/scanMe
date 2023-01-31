import * as React from 'react';
import { useState,useEffect,useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate, useParams } from 'react-router-dom';
import {RiSkullFill} from "react-icons/ri"
import { Header,ResultCard } from '../components';
import axios from 'axios';
import {RiNumbersLine} from "react-icons/ri"
import {MdAccessTime} from "react-icons/md"
import {VscTools} from "react-icons/vsc"
import {FiArrowRight} from "react-icons/fi"
import {motion} from "framer-motion"
import {MdOutlineSchema} from "react-icons/md"
import hexToRgba from "hex-to-rgba";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { borderColor } from '@mui/system';
import AuthContext from '../contexts/AuthContext';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);







const columns = [
  { field: 'port', headerName: 'PORT', width: 150,headerClassName: 'super-app-theme--header',
  renderCell:(param)=>(
    <p className=' font-semibold' > {param.formattedValue} </p>
  )
 
},
  { field: 'url', headerName: 'URL', width: 300,headerClassName: 'super-app-theme--header' },
  { field: 'host', headerName: 'Host', width: 150,headerClassName: 'super-app-theme--header',
  renderCell:(param)=>(
    <p className=' font-semibold' >
      {param.formattedValue}

    </p>
  )
},
  { field: 'tech', headerName: 'Tech', width: 600,headerClassName: 'super-app-theme--header',
  renderCell:(param)=>{
    let tab = param?.formattedValue?.
    slice(1,-1).
    replaceAll("'","").
    replaceAll(" ","").split(",")
    return (
      <div className="flex flex-row gap-2"  >
        {tab?.map((item,index)=>(
          <div key={index} className=' py-1 px-1 border-color border-[1px] rounded-lg' >
             {item}
          </div>
        ))}
      </div>
    )
    
  }

},
  { field: 'time', headerName: 'Time', width: 150,headerClassName: 'super-app-theme--header' },
  { field: 'scheme', headerName: 'Schema', width: 145,headerClassName: 'super-app-theme--header' },
  { field: 'webserver', headerName: 'Web Server', width: 130,headerClassName: 'super-app-theme--header' },
//   {field: 'details', headerName: 'Details', width: 130,headerClassName: 'super-app-theme--header',
//   renderCell: (params) => {
//     return (
//         <div className=" flex justify-center gap-2 items-center" style={{ cursor: "pointer" }}>
//           <p className=' font-semibold hover:underline' >Show risks </p>  <RiSkullFill index={params.row.id} />  
//          </div>
//     );
//  }
// },
]

export default function Subdomains() {
  
  const {id} = useParams()
  const url =`http://64.227.128.246:8080/scanner/target/${id}/subdomains/`
  const navigate=useNavigate();
  const {currentColor,setUrls} = useStateContext();
  const {authTokens} =useContext(AuthContext)
  const [dataServer,setDataServer]= useState([]);
  const [loading,setLoading]=useState(false);
  const [http,setHttp]=useState([])
  const [dataChart,setDataChart] = useState({
    labels:[],
    datasets: [
      {
        label: '',
        data:[],
        borderColor: currentColor,
        backgroundColor: currentColor,
      },
    ],
  })
  
  const handleOnCellClick=(param)=>{
        console.log(param);
        if(param.field==="details"){
          navigate(`/risks/${param.id}`)
        }
  }

  
    let moy = (dataServer.reduce((accumulator, object) => {
      return accumulator + parseFloat((object.time).slice(0,-2));
     }, 0) / dataServer.length).toFixed(3)

   
  const getResult= async () => {
      setLoading(true) 
      let res = await axios.get(url,{headers:{
        authorization:`Bearer ${authTokens.access}`
    }})
    console.log(res)
      if(res.status===200||res.status===201){
        
        setDataServer(res.data.data)
        setHttp([res.data.stats.https_number,res.data.stats.http_number])
        let tech = res.data.stats.tech
        setDataChart(
          {
            labels:[tech[0][0], 
            tech[1][0], 
            tech[2][0], 
            tech[3][0]
          ],
            datasets: [
              {
                label: 'Techno',
                data:[res.data.stats.tech[0][1],
                res.data.stats.tech[1][1],
                res.data.stats.tech[2][1],
                res.data.stats.tech[3][1],
              ],
                borderColor: currentColor,
                backgroundColor: currentColor,
              },
            ],
          }
        )
        setLoading(false)
      }
      else{
        console.log("error load")
        setLoading(false)
      }
  }

  useEffect(()=>{
    getResult()
    },[])

  const [options,setOptions] = useState({
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  })

  
 


  
  return (
 <div className=' py-10 mt-20' >
  {/* <div className=' h-15 w-full flex flex-row justify-end px-10' >
    <motion.button 
    whileHover={{scale:1.1}} 
    transition={{duration:0.1}}
    style={{background:currentColor}}
    onClick={()=>navigate(`/scan/risks/${id}`)} 
    className=' gap-2 flex flex-row justify-center items-center text-white py-2 px-6 rounded-3xl' >
      Risks<span className=' text-white' ><FiArrowRight/></span></motion.button>
  </div> */}
  <div className=' flex md:flex-row gap-4 flex-col ss:justify-start justify-center mt-4 ml-0 items-center' >
    <div className=' w-[90%] ss:w-[70%] md:w-[30%]  flex flex-col gap-6 justify-center items-center' >
    <ResultCard color={currentColor} title="number of Subdomains:" display={dataServer.length} icon={<RiNumbersLine/>} />
    <ResultCard color={currentColor} title="Average time:" display={`${moy} ms`} icon={<MdAccessTime/>}  /> 
    <div className=' flex justify-center items-center flex-col gap-3 rounded-xl bg-opacity-20 hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer bg-slate-100 backdrop-blur-md drop-shadow-lg h-[200px] md:w-[90%] w-[60%]' >
        <div>
          <motion.div whileHover={{scale:1.2}} style={{background:currentColor}} className=' text-4xl rounded-full p-2' ><MdOutlineSchema/></motion.div>
        </div>
        <div className=' flex flex-col justify-center items-center w-full' >
        <p className=' text-[20px] text-gray-600 font-semibold' >Schema:
          </p>

        </div>
         <div className=' flex flex-row gap-3 justify-center items-center' >
          <div className=' flex justify-center items-center flex-col gap-2 ' >
            <p className='text-3xl font-semibold' >HTTP</p>
            <p>{http[0]}</p>
          </div>
          <div style={{background:currentColor}} className=' h-full w-[1px] '  ></div>
          <div className=' flex justify-center items-center flex-col gap-2 ' >
            <p className=' text-3xl font-semibold' >HTTP</p>
            <p>{http[1]}</p>
          </div>
           

         </div>
        </div> 

    </div>
    <div className='flex flex-col w-[70%] justify-center items-center gap-4 md:mt-0 mt-10' >
      <div>
        <h1 className=' flex flex-row justify-center items-center gap-2 font-semibold text-3xl' > <span><VscTools/></span> Technologies:</h1>
      </div>
    <Bar options={options} data={dataChart} />

    </div>
    

    </div>



  <div className=' flex justify-center items-center mt-20 h-full w-full' >
  <div  style={{ height: '60vh', width: '95%' }}>
      <DataGrid
        rows={dataServer}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        onCellClick={handleOnCellClick}
        getRowClassName={(params) => `super-app-theme--${(params.id)%2}`}
        sx={{
          boxShadow: 2,
          '& .super-app-theme--header': {
            backgroundColor: hexToRgba(currentColor).slice(0, hexToRgba(currentColor).length - 2)+"0.9)",
            color:"white",
            

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
  
  );
}