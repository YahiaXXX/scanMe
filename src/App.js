 import { useEffect,useState,useContext } from "react";
 import {Login,Register,Scan,Result,Risks,Dashboard,Vulnerabilities,Subdomains} from "./pages"
 import { Navbar,Sidebar,ThemeSettings } from "./components";
 import {Route,Routes} from "react-router-dom" 
 import { useStateContext } from "./contexts/ContextProvider";
import PrivateRoute from "./utils/PrivateRoute";
import AuthContext from "./contexts/AuthContext";
import Targets from "./pages/Targets";


 
 
 function App() {
  const {user} =useContext(AuthContext);;
 
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <>
        <div className={` ${currentMode === "dark" ? "dark" : ""}`}>
          <div className=" flex relative dark:bg-main-dark-bg">
           


            
            {activeMenu && user ? (
              <div className={`w-72 sidebar fixed dark:bg-secondary-dark-bg bg-white`}>
              
                <Sidebar />
              </div>
            ) : ""}
            <div
              className={`dark:bg-main-dark-bg bg-white min-h-screen w-full
           ${activeMenu && user 
               ? " md:ml-72 " 
               : "flex-2"}
          `}
            >
             {user && <div className=" fixed md:fixed  bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>}
  
              <div className ="" >
                {themeSettings && <ThemeSettings />}
                <Routes>
                  <Route element={<PrivateRoute/>}>
                 
                  <Route path="/scan/result/:id" element={<Result />} />
                  <Route path="/scan/Subdomains/:id" element={<Subdomains />} />
                  <Route path="/scan/risks/:id" element={<Risks />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/home" element={<Dashboard />} />
                  <Route path="/scan" element={<Scan/>} />
                  <Route path="/All Targets" element={<Targets />} />
                  <Route path="/Vulnerabilities" element={<Vulnerabilities />} />
                  

                  </Route>
                  
                  <Route exact path="/login" element={<Login/>} />
                  <Route exact path="/register" element={<Register/>} />
                  
                </Routes>
              </div>
            </div>
          </div>
     
      </div>     
       
  
     </>
  );
}

export default App;
