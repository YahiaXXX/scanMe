import * as React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { DataGrid } from "@mui/x-data-grid";
import { risks } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { RiSkullFill } from "react-icons/ri";
import { Header, Popper } from "../components";
import { Doughnut } from "react-chartjs-2";
import { ImEarth } from "react-icons/im";
import hexToRgba from "hex-to-rgba";
import { Spinner } from '../components/spinner/Spinner';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);


const options = {
  plugins: {
    
    legend: {
      display: true,
      position: "top",
      align: "middle",
    },
  },
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    headerClassName: "super-app-theme--header ",
    renderCell: (params) => (
      <div className=" font-semibold">{params.formattedValue}</div>
    ),
  },
  {
    field: "level",
    headerName: "LEVEL",
    width: 200,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => {
      let color;
      if (params.formattedValue === "info") {
        color = "#61FF00";
      }
      if (params.formattedValue === "low") {
        color = "#FBFF00";
      }

      if (params.formattedValue === "medium") {
        color = "#FF9300";
      }
      if (params.formattedValue === "high") {
        color = "#FF0400";
      }

      return (
        <div
          className=" font-semibold px-2 py-1 rounded-md "
          style={{ background: color }}
        >
          {params.formattedValue}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 270,
    headerClassName: "super-app-theme--header",
    renderCell: (param) => <Popper desc={param.formattedValue} />,
  },
  {
    field: "reference",
    headerName: "Reference",
    width: 450,
    headerClassName: "super-app-theme--header",
    renderCell:(params)=>{
      let link=params?.formattedValue?.slice(1,-1)
      let link2=link?.slice(1,-1)
      return (
        <a className=" hover:cursor-pointer" href={link2}> {link2}</a>
      )
    }
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 440,
    headerClassName: "super-app-theme--header",
    renderCell: (params) => {
      let tab = params?.formattedValue
        ?.slice(1, -1)
        .replaceAll("'", "")
        .replaceAll(" ", "")
        .split(",");
      return (
        <div className="flex flex-row gap-2">
          {tab?.map((item, index) => (
            <div
              key={index}
              className=" py-1 px-2 border-color border-[1px] rounded-lg"
            >
              {item}
            </div>
          ))}
        </div>
      );
    },
  },
];

export default function Risks() {
  const baseUrl= process.env.REACT_APP_BASE_URL
  const { currentColor,urls } = useStateContext();
  const data={
    labels: ["info","low","medium", "high"],
    datasets: [
      {
        data: [10,
          20,
          30,
          40
          ],
        backgroundColor: ["green", "yellow", "orange","red"],
      },
    ],
  }
  const {id} = useParams()
  const url =`${baseUrl}/scanner/target/${id}/risks/`
  const [dataServer,setDataServer]=useState([]);
  const [loading,setLoading]=useState(false)
  const [dataPie,setDataPie]=useState({
    labels: ["info","low","medium", "high"],
    datasets: [
      {
        data: [0,0,0,0],
        backgroundColor: ["#61FF00", "#FBFF00", "#FF9300","#FF0400"],
      },
    ],
  })
  
  const getResult= async () => {
    setLoading(true) 
    let res = await axios.get(url)
    console.log(res)
    if(res.status===200||res.status===201){
      setDataServer(res.data.data)
      setDataPie({
        labels: ["info","low","medium", "high"],
        datasets: [
          {
            data: [res?.data.stats.info_level_count,
              res?.data.stats.low_level_count,
              res?.data.stats.medium_level_count,
              res?.data.stats.high_level_count
              ],
            backgroundColor: ["#61FF00", "#FBFF00", "#FF9300","#FF0400"],
          },
        ],
      })
      setLoading(false)
    }
    else{
      console.log("error load")
      setLoading(false)
    }
}

useEffect(()=>{
  getResult()
  let fourMinutes = 1000 * 20   

    let interval =  setTimeout(()=> {
       getResult()
    }, fourMinutes)
  },[])
  return (
    <>
    { loading  ? <div className=' flex justify-center items-center w-full h-screen' > <Spinner color={currentColor} /></div>     : <div className=" py-10 md:mt-20 mt-10">
      <div className=" flex md:flex-row md:gap-0 gap-4 flex-col ss:justify-around justify-center ml-0 items-center">
        <div className="md:w-[30%] w-[100%] justify-center items-center flex-col flex gap-4">
          <div className=" flex justify-center items-center flex-col gap-3 rounded-xl bg-opacity-30 bg-slate-50 backdrop-blur-md hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer drop-shadow-lg h-[200px] md:w-[80%] w-[70%] ">
            <div
              style={{ background: currentColor }}
              className=" text-4xl p-2 rounded-full"
            >
              <ImEarth />
            </div>
            <div className=" flex flex-col gap-4 justify-center items-center">
              <p className=" text-[20px] text-gray-600 font-semibold">
                Domain URL:
              </p>
              <p className=" text-black font-semibold text-2xl" >{urls}</p>
              {/* <p className=" font-semibold text-[20px]">
                <span className=" text-black">
                  Subdomain: <span></span>
                </span>
              </p> */}
            </div>
          </div>

          <div className=" flex justify-center items-center flex-col gap-3 rounded-xl bg-opacity-30 bg-slate-50 backdrop-blur-md hover:bg-opacity-50 hover:border-color hover:border-[1px] cursor-pointer drop-shadow-lg h-[200px] md:w-[80%] w-[70%] ">
            <div
              style={{ background: currentColor }}
              className=" text-4xl p-2 rounded-full"
            >
              <ImEarth />
            </div>
            <div className=" flex flex-col gap-4 justify-center items-center">
              <p className=" flex flex-col justify-center items-center  text-[20px] text-gray-600 font-semibold">
                Globale Risks: 
                <span className=" font-semibold text-3xl text-black" >{dataServer.length}</span>
              </p>
              <p className=" font-semibold text-[20px]">
                <span className=" text-black">
                  
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-opacity-30 bg-slate-50 py-5 flex justify-center gap-3 items-center flex-row rounded-xl backdrop-blur-md drop-shadow-lg h-[400px] md:w-[50%] w-[70%]">
          <p className=" font-semibold text-2xl">Risks Levels:</p>

          <Doughnut data={dataPie} options={options} />
        </div>
      </div>

      <div className=" flex justify-center items-center mt-20 h-full w-full">
        <div style={{ height: "60vh", width: "100%" }}>
          <DataGrid
            rows={dataServer}
            columns={columns}
            pageSize={50}
            onCellClick={(param)=>console.log(param)}
            rowsPerPageOptions={[50]}
            getRowClassName={(params) => `super-app-theme--${params.id % 2}`}
            sx={{
              background:"rgba(243,243,243,0.2)",
              boxShadow:2,
              
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
              "& .idType": {
                color: currentColor,
              },
    
            }}
          />
        </div>
      </div>
    </div>
    
    }
    </>
    
  );
}
