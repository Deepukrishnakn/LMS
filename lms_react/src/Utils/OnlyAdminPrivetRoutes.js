import React,{useContext} from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import AuthContext from '../context/authContext'


function OnlyAdminPrivetRoutes() {

    let {authTokens} = useContext(AuthContext)
   
    return authTokens ?  <Navigate to='/adminhome'></Navigate>: <Outlet/>
}

export default OnlyAdminPrivetRoutes