import React,{useEffect,useState,useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Anavebar from './Anavebar';
import axios from "../../constans/constants"
import Button from 'react-bootstrap/Button';
import { useNavigate,Link } from 'react-router-dom';
import authContext from '../../context/authContext';


function AllBooks() {

  const {authTokens} =useContext(authContext)
  const navigate = useNavigate()
    const [book,setBook] = useState([])
    const bookCall=()=>{
      axios.get('mastar/get_books').then(res=>{
        console.log(res.data)
        setBook(res.data)
       }).catch(e=>console.log(e))
    }

    const deleteBook = async (id,e) => {
      e.preventDefault();
      await axios.delete(`mastar/get_books/${id}`,{headers:{Authorization:`Bearer ${authTokens?.token}`,  'content-type': 'multipart/form-data'} })
      .then(res => console.log('deletede...!!!!!',res))
      .catch(err => console.log(err))
    }
  
    useEffect(() => {
      bookCall()
    }, [])
   
  return (
    <div>
<Anavebar/>
<h1 className='title mb-5 mt-5'>Your Books</h1>

           <Table striped className='m-5'>
      <thead>
        <tr>
          <th></th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      {book.map((obj)=>
      <tbody>
        <tr>
          <td>*</td>
          <td>{obj.book_name}</td>
          <td>{obj.author}</td>
          <td>{obj.category.category_name}</td>
          <td>{obj.price}</td>
          <td><Button variant="success" className="bookbtn me-5" onClick={()=>navigate(`/editbook/${obj.id}`)}>EDIT</Button></td>
          <td><Button variant="danger"onClick={(e) => deleteBook(obj.id,e)}>DELETE</Button></td>
          
        </tr>
      </tbody>
      )}
    </Table>

    </div>
  )
}

export default AllBooks