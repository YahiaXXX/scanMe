import React,{useEffect,useContext,useState} from "react";
import {BsCheckLg} from "react-icons/bs"
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiBarChartAlt2 } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { DataGrid } from "@mui/x-data-grid";
import hexToRgba from "hex-to-rgba";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const columns = [
  
  {
    field: "url",
    headerName: "Domain Url",
    width: 400,
    headerClassName: "super-app-theme--header",
    renderCell: (param) => (
      <div className="">{param.formattedValue}</div>
    ),
  },
  {
    field: "scan_type",
    headerName: "Scan Type",
    width: 300,
    headerClassName: "super-app-theme--header ",
    renderCell: (params) => (
      <div className=" font-poppins">{params.formattedValue}</div>
    ),
  },
  {
    field: "created_at",
    headerName: "Date",
    width: 400,
    headerClassName: "super-app-theme--header",
    renderCell: (param) => {
      const date = new Date(param.formattedValue);
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      return (
      <div className=" text-black ">{formattedDate}</div>
    )
  },
  },

  {
    field: "get_all",
    headerName: "Get All Subdomains",
    width: 310,
    headerClassName: "super-app-theme--header",
    renderCell: (param) =>(
      <div className=" text-white px-1 py-1 bg-green-600 bg-opacity-80  rounded-3xl">
        <BsCheckLg/> 
      </div>
    ),
  },
];
// const config = {
//   type: 'doughnut',
//   data: data,
// };
const optionsConf = {
  circumference:180,
  aspectRatio:2,
  rotation:270,
  cutout:"80%",
  width:"100%",
  plugins: {
    legend: {
      display: true,
      position: "top",
      align: "middle",
      color:"#7393B3"
    },
  },
};







// const gaugeText={
//   id:"gaugeText",
//   beforeDatasetsDraw(chart,args,pluginsOptions){
//     const {ctx,chartArea:{top,bottom,left,right,width,hight}} = chart;
//    const xcor= chart.getDatasetMeta(0).data[0].x
//    const ycor= chart.getDatasetMeta(0).data[0].y-30;
//     ctx.save()
//     ctx.fillStyle='black';
//     ctx.textAlign='center'
//     ctx.font='bold 30px sans-serif'
//     ctx.fillText('text',xcor,ycor)

//   }
// }

// const DoghnutData = [
//   { name: 'Group A', value: 4 },
//   { name: 'Group B', value: 20 },
  
// ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const Card = ({ text1, text2 }) => (
  <div className=" flex justify-center items-center flex-col gap-3 rounded-xl bg-opacity-30 bg-slate-50 backdrop-blur-md hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer drop-shadow-sm h-[200px] md:w-[20%] w-[50%] ">
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className=" text-3xl text-gray-600 dark:text-white font-semibold">{text1}</p>
      <p className=" font-bold text-base text-[10px] ">
        <span className=" text-black dark:text-slate-300">{text2}</span>
      </p>
    </div>
  </div>
);

export const Card2 = ({ tech, color }) => {
   let bgCol = hexToRgba(color).slice(0, hexToRgba(color).length - 2)+"0.6)"
 
 return (
  <div style={{ background:bgCol }} className=" flex border-color rounded-md justify-center items-center flex-row gap-3 backdrop-blur-md hover:drop-shadow-lg border-[1px] cursor-pointer drop-shadow-sm h-[70px] md:w-[20%] w-[80%] ss:w-[50%] ">
    <div
      className={`h-full rounded-md hover:bg-opacity-30 bg-opacity-60 justify-center gap-4  items-center flex flex-row w-full`}
    >
      <p className=" dark:text-slate-100 text-xl font-semibold ">
        <BsLightningCharge />
      </p>
      <p className=" text-[20px] font-medium dark:text-slate-100 ">{tech}</p>
    </div>
  </div>
)};

function Dashbord() {
  const { currentColor, screenSize,currentMode } = useStateContext();
  
  const [homeData,setHomeData]=useState({
    host_number:0,
    latest_scans:[],
    port_number:0,
    riks_summary:[],
    self_targets_number:0,
    total_subdomain_finder:0,
})
const [options,setOptions] = useState({
  indexAxis: 'y',
  width:200,
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
const [dataDoghnut,setDataDoghnut]=useState({
  labels: [
    'Consumed Scans',
    'Available Scans',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [4, 16],
    backgroundColor: [
      '#1A97F5',
      '#03C9D7',
    ],
    hoverOffset: 4
  }]
})
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
const getWord = (str)=>{
  let tmp = str.split(" ")
  let res = tmp[0]+" "+tmp[1]
  return res

}
  const baseUrl = process.env.REACT_APP_BASE_URL
  const {authTokens} = useContext(AuthContext)
  const homeUrl=`${baseUrl}/scanner/my_home`
  let bool = screenSize > 700;
  const [gaugePer,setGaugePer]=useState(
    {
      id:"gaugePer",
      beforeDatasetsDraw(chart,args,pluginsOptions){
        const {ctx,chartArea:{top,bottom,left,right,width,hight}} = chart;
       const xcor= chart.getDatasetMeta(0).data[0].x
       const ycor= chart.getDatasetMeta(0).data[0].y-30;
        ctx.save()
        ctx.fillStyle='#7393B3';
        ctx.textAlign='center'
        ctx.font='bold 20px sans-serif'
        ctx.fillText("Your Free Trial",xcor,ycor)
    
      }
    }
  )



  const getHomeData = async ()=>{
    let res = await axios.get(homeUrl,{headers:{
      authorization:`Bearer ${authTokens.access}`
  }})
    setHomeData(res.data.stats)
    let risks = res.data.stats.riks_summary
    setDataDoghnut(
      {
        labels: [
          'Scans',
          'Available Scans',
        ],
        datasets: [{
          label: 'Free Hits',
          data: [res.data.stats.self_targets_number, 
            50-res.data.stats.self_targets_number],
          backgroundColor: [
            currentColor,
            "gray",
          ],
          hoverOffset: 4
        }]
      }
    )
    setDataChart(
      {
        labels:[
        getWord(risks[0][0]), 
        getWord(risks[1][0]), 
        getWord(risks[2][0]), 
        getWord(risks[3][0])
      ],
        datasets: [
          {
            label: 'Techno',
            data:[risks[0][1],
            risks[1][1],
            risks[2][1],
            risks[3][1],
          ],
            borderColor: currentColor,
            backgroundColor: currentColor,
          },
        ],
      }
    )
    console.log(res)
 
  }

  useEffect(() => {
    getHomeData();
   
    
    
  }, [currentColor]);
  return (
    <div className=" h-[100%] w-[100%] mt-20 ">
      <div className=" w-full py-1 bg-blue-200 bg-opacity-10 backdrop-blur-lg sm:px-10 px-2 h-20 flex justify-between items-center ">
        <div className=" h-full flex flex-col gap-1 justify-start items-start ">
          <h1 className=" sm:text-3xl text-xl text-gray-800 font-semibold dark:text-slate-100  ">
            Dashboard
          </h1>
          <p className=" sm:text-[20px] text-[12px] text-gray-400">
            Welcome to ScanMe home
          </p>
        </div>

        <div className="h-full flex justify-center items-end">
         <Link to={"/scan"} ><p className=" font-semibold sm:text-[20px] text-[17px] text-base text-blue-900 dark:text-blue-400">
            Getting Started
          </p></Link> 
        </div>
      </div>

      <div className=" bg-gray-200 h-[1px] w-full" />

      <div className=" px-4 gap-4 w-full flex flex-col mt-4 ">
        <div className=" w-full flex justify-start items-center ">
          <p className=" dark:text-white sm:text-[25px] text-[20px] font-semibold flex gap-2   justify-center items-center">
            <span style={{ color: currentColor }}>
              <AiOutlineStar />
            </span>
            Our Services
          </p>
        </div>
        <div className=" flex sm:flex-row flex-col gap-4 sm:justify-start justify-center items-center">
          <Card2 tech="Subdomains Finder" color={currentColor} />
          <Card2 tech="Vulnerability Finder" color={currentColor} />
          
        </div>
      </div>

      <div className=" sm:px-4 px-2 flex md:flex-row flex-col mt-8 ">
        <div className="flex flex-col gap-8 justify-start items-center md:w-[50%] w-full">
          <div className=" ss:pr-2 pr-1 flex justify-between items-center w-full">
            <p className="dark:text-white sm:text-[25px] text-[17px] gap-2  font-semibold flex justify-center items-center">
              <span style={{ color: currentColor }}>
                <AiOutlinePieChart />
              </span>
              Attack Surface Summary
            </p>
            <p className=" text-[15px] font-semibold text-gray-300">
              Last 14 days
            </p>
          </div>
          <div className=" w-full justify-start items-center gap-2 flex flex-row">
            <Card text1={homeData.total_subdomain_finder} text2="SUBDOMAINS" />
            <Card text1={homeData.port_number} text2="PORTS" />
            <Card text1={homeData.host_number} text2="WEB HOSTS" />
          </div>
        </div>

        <div className="md:w-[50%] w-[100%] justify-center items-center flex flex-col gap-2 md:mt-0 mt-4  ">
          <div className="ss:pr-2 pr-1 flex justify-between w-full">
            <p className="dark:text-white sm:ml-4 ml-0 sm:text-[25px] gap-2  text-[17px] font-semibold flex justify-center items-center">
              <span style={{ color: currentColor }}>
                <BiBarChartAlt2 />
              </span>
              Vulnerability summary
            </p>
            <p className=" text-[15px] font-semibold text-gray-300">
              Last 14 days
            </p>
          </div>
        
          <Bar options={options} data={dataChart} />
        </div>
      </div>

      <div className=" sm:px-4 px-2 flex flex-col gap-4 mt-4">
        <div className=" w-full flex justify-between items-center ">
          <p className=" dark:text-white sm:text-[25px] text-[17px] gap-2  font-semibold flex justify-center items-center">
            <span style={{ color: currentColor }}>
              <AiOutlineStar />
            </span>
            Scan
          </p>
          <p className=" text-[15px] font-semibold text-gray-300">Overview</p>
        </div>

        <div className="w-full flex sm:flex-row flex-col justify-center items-center ss:gap-8 gap-4">
          <div className="sm:w-[40%] w-[90%] flex justify-center items-center flex-col gap-3 rounded-xl bg-opacity-30 bg-slate-50 backdrop-blur-md hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer drop-shadow-lg h-[300px] ">
            <p style={{ color: currentColor }} className="text-3xl">
              {homeData.self_targets_number}
            </p>
            <p className=" font-bold text-gray-600 dark:text-slate-300">TARGETS</p>
          </div>
          <div className=" sm:w-[40%] w-[90%] flex justify-center items-center gap-3 rounded-xl bg-opacity-30 backdrop-blur-md bg-slate-50 hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer drop-shadow-lg h-[300px] ">
          <Doughnut style={{height:"70%"}} data={dataDoghnut} options={optionsConf} plugins={[gaugePer]} />
            </div>
        </div>
      </div>

      <div className="flex flex-col mt-4 ">
        <div className="  sm:px-4 px-2  w-full flex justify-start items-center ">
          <p className="dark:text-white sm:text-[25px] gap-2  text-[17px] font-semibold flex justify-center items-center">
            
            <span style={{ color: currentColor }}>
              <AiOutlineStar />
            </span>
            Latest Scans
          </p>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className=" py-10 h-[50vh] w-[100%] ">
            <DataGrid
              rows={homeData.latest_scans}
              columns={columns}
              pageSize={30}
              height={300}
              rowsPerPageOptions={[30]}
              getRowClassName={(params) => `super-app-theme--${params.id % 2}`}
              onCellClick={(param)=>console.log(param)}
              getCellClassName={(param)=>`${ param.field==="url" ? "urlType"    : ""   }`}
              sx={{
                background:"rgba(243,243,243,0.2)",
                boxShadow: 2,
                '.MuiDataGrid-columnSeparator': {
                  display: 'none',
                },
                '&.MuiDataGrid-root': {
                  border: 'none',
                },
                "& .super-app-theme--header": {
                  border:"none",
                  fontWeight:900,
                  color:"black",
                  fontSize:"15px",
                  fontFamily:"unset"
                },
                
                "& .urlType": {
                  color: currentColor,
                },

              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
