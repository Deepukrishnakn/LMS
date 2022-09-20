import React,{useContext,useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../components/home/Home.css'
import axios from "../../constans/constants"
import authContext from '../../context/authContext';

function AdminHome() {

  const {authTokens} =useContext(authContext)
  const [book,setBook] = useState([])
  const bookCall=()=>{
    axios.get('mastar/get_books',{headers:{Authorization:`Bearer ${authTokens?.token}`,  'content-type': 'multipart/form-data'} }).then(res=>{
      console.log(res.data)
      setBook(res.data)
     }).catch(e=>console.log(e))
  }

  useEffect(() => {
    bookCall()
  }, [])

  return (
    
<div className='bookcard'>
      <Row className='m-5 bookcard'>
   {book.map((obj)=>
       <Col lg={3}>
        <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={obj.image}/>
      <Card.Body>
        <Card.Title>{obj.book_name}</Card.Title>
        <Card.Text>
          {obj.description}
        </Card.Text>
        <Card.Text>
        Author: {obj.author}
        </Card.Text>
        <Card.Text>
        Category {obj.category.category_name}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    )}
      </Row>
     

    </div>
  )
}

export default AdminHome