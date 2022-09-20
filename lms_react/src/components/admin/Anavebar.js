import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link } from 'react-router-dom';
import AuthProvider from '../../context/authContext';

function Anavebar() {

  let {userLogout} = useContext(AuthProvider)
  return (
    <div>

<Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
        <Link to='/adminhome'> <Navbar.Brand href="">Home</Navbar.Brand></Link>
        <Link to='/addbook'> <Navbar.Brand href="">Add Book</Navbar.Brand></Link>
        <Link to='/allbooks'> <Navbar.Brand href="">All Books</Navbar.Brand></Link>
          <Navbar.Brand href="" onClick={userLogout}>Log out</Navbar.Brand>
          
        </Container>
      </Navbar>
    </Container>

    </div>
  )
}

export default Anavebar