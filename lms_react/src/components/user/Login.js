import React,{useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../user/Register.css";
import AuthContext from '../../context/authContext';
import { useNavigate,Link } from 'react-router-dom';

function Login() {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const {userLogin,message,setMessage,error }=useContext(AuthContext)

   
  const [emailErr, setEmailErr] = useState({})
  const [passwordErr, setPasswordErr] = useState({})


// api call for user login
  const loginHandler=(e)=>{
    e.preventDefault()
    const isValid = formValidation()
    if(isValid){
    // console.log(email)
    // console.log(password)
    userLogin(email,password)
  }}

  // login form  validation------------
  
  const formValidation=()=>{ 
    
    const emailErr={}
    const passwordErr={}
    let isValid = true

  if (!email){
    emailErr.short_email= '*email is a required field'
    isValid = false
  }

  if(!password ){
    passwordErr.short_password= '*password is a required field!'
    isValid = false
  }
  
  setEmailErr(emailErr)
  setPasswordErr(passwordErr)
console.log(error)
  return isValid
}


  return (
    <div className='m-5'>


<div>
<Form className='login_form' onSubmit={loginHandler}>
      <Form.Group className=" ms-5 me-5" controlId="formBasicEmail">
      {  error &&(<> <h6 style={{color:'red'}}>{error}</h6>  <br/></>) }
        <Form.Label>Email address</Form.Label>
        <Form.Control className='' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        {Object.keys(emailErr).map((key)=>{
                return <div style={{color:'red'}} >{emailErr[key]}</div>
              })}
      </Form.Group>

      <Form.Group className="mb-3 ms-5 me-5 " controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        {Object.keys(passwordErr).map((key)=>{
                return <div style={{color:'red'}} >{passwordErr[key]}</div>
              })}
      </Form.Group>
     
      {/* <Form.Group className="ms-5 mb-3 login_form" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button className='ms-5 me-5' variant="primary" type="submit">
        Submit
      </Button>
      <Link className='ms-5 mb-3 mt-3' to='/Register'> SignUp</Link>
    </Form>
    </div>
    </div>
  )
}

export default Login