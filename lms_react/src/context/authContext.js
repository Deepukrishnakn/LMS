import { createContext,useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate} from 'react-router-dom'
import axios from "../constans/constants"

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    const [phone_number, setPhone_number] = useState('')
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)

  
    const [message,setMessage]= useState('')
    const [error,setErr]= useState('')       
const userLogin= async (email,password)=>{
    // console.log(email)
    // console.log(password)
    await axios.post('account/Login', {email:email,password:password}).then((response)=>{
       
        console.log(response.data,'user')
        setAuthTokens(response.data.token)
        setErr(response.data.message) 
        console.log(response.data.message,'user')
        if(response.data.token){
            localStorage.setItem('authTokens',JSON.stringify(response.data))
            localStorage.setItem('user',JSON.stringify(jwt_decode(response.data.token)))
            response.data.token.is_superusre? navigate('/adminhome'):
            navigate( '/home' )
        }

       if(response.data.message){
        console.log('user')
       }
    })

console.log(authTokens)

  }
let userLogout = () => {
    setAuthTokens(null);
    setUser(null)
    localStorage.removeItem('authTokens')
    localStorage.removeItem('user')
    navigate( '/' )   
}
  
  
    let contextData={
        user:user,
        phone_number:phone_number,
        setPhone_number:setPhone_number,
        userLogout:userLogout,
        userLogin:userLogin,
        message:message,
        setMessage:setMessage,
        error:error,
        authTokens:authTokens,
    }
    return(
        <AuthContext.Provider value={contextData}>,
            {children}
        </AuthContext.Provider>
    )
}