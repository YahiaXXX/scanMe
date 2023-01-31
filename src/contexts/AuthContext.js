import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import  { validEmail,validPassword } from "../components/Regex"
import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [loginLoading,setLoginLoading] = useState(false)
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(false)
    const [emailErr,setEmailErr]=useState(false)
    const [passwordErr,setPasswordErr]=useState(false)
    const urlLogin ="http://165.232.152.255:8080/api/token/"
    const urlRefresh = "http://165.232.152.255:8080/api/token/refresh/"

    const validate=(email,password)=>{
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

    const history = useNavigate()

    let loginUser = async (email,password)=> {
        setLoginLoading(true)
        let res = await axios.post(urlLogin,
        {"email":email, "password":password}
        )
        let data = res.data;
        console.log(data);
        if(res.status === 200 || res.status===201 ){
            setLoginLoading(false)
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            history('/')
        }else{
            setLoginLoading(false)
            console.log('Something went wrong!')
           
        }

        }






    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history('/login')
    }



    let updateToken = async ()=> {
        let res = await axios.post(urlRefresh,{'refresh':authTokens?.refresh}) 
        let data = res.data
         data = {...data,refresh:authTokens.refresh}
        if (res.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            logoutUser()
        }
        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        loginLoading:loginLoading,
    }


    useEffect(()=> {

        if(loading){
            updateToken()
            console.log("updated")
        }

        let fourMinutes = 1000 * 60 * 60   

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}