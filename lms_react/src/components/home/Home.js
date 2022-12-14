import React,{useContext,useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../home/Home.css'
import axios from "../../constans/constants"

function Home() {


  const [book,setBook] = useState([])
  const bookCall=()=>{
    axios.get('mastar/get_books').then(res=>{
      console.log(res.data)
      setBook(res.data)
     }).catch(e=>console.log(e))
  }

  useEffect(() => {
    bookCall()
  }, [])
  
  return (
    <div className=''>
      <Row>
      <h1 className='title mt-5'>Find Your Book</h1>
   {book.map((obj)=>
       <Col lg={4}>
        <Card className='m-5'>
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
        Category: {obj.category.category_name}
        </Card.Text>
        <Button variant="primary">Read</Button>
      </Card.Body>
    </Card>
    </Col>
    )}
      </Row>
     

    </div>
  )
}

export default Home