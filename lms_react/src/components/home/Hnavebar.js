import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link } from 'react-router-dom';
import AuthProvider from '../../context/authContext';

function Hnavebar() {
  let {userLogout} = useContext(AuthProvider)
  return (
    <div>

<Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
        <Link to='/'> <Navbar.Brand href="">Home</Navbar.Brand></Link>
          <Navbar.Brand href="#" className='title'>School Library</Navbar.Brand>
          <Link to='/Login'> <Navbar.Brand href="" >Admin Login</Navbar.Brand></Link>
          
        </Container>
      </Navbar>
    </Container>

    </div>
  )
}

export default Hnavebar