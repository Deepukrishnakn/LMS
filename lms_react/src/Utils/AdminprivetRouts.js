import React,{useContext} from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import AuthContext from '../context/authContext'

function AdminprivetRouts() {
    let {authTokens} = useContext(AuthContext)
    console.log(authTokens)

    return authTokens ? <Outlet/>: <Navigate to='/Login'></Navigate>
}

export default AdminprivetRouts