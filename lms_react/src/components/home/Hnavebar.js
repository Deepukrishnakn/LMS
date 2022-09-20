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
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Brand href="#">Add Book</Navbar.Brand>
          <Navbar.Brand href="" onClick={userLogout}>Log out</Navbar.Brand>
          
        </Container>
      </Navbar>
    </Container>

    </div>
  )
}

export default Hnavebar