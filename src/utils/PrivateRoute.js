import { Route, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../contexts/AuthContext';


export default function PrivateRoute(){
 
    let {user} = useContext(AuthContext);
    return (
        !user ? <Navigate to="/login" />    : <Outlet/> 
    )
   
}

