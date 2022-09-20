import React,{useState,useContext,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import authContext from '../../context/authContext';
import '../home/Home.css'
import Anavebar from './Anavebar';
import { useParams } from 'react-router-dom'
import axios from "../../constans/constants"

// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function EditBook() {

    const {authTokens} =useContext(authContext)
    const [book_name, setBookname] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [price, setprice] = useState("");
    const [image, setImage] = useState();
    const [category_id, setCategory_id] = useState("");
    const [is_available, setIs_available] = useState("False")
    const [category,setCategory] = useState([])

    // const history = useHistory()
    const { id }= useParams()


    const loadBooks = async () => {
        const {data} = await axios.get(`mastar/get_books/${id}/`);
        console.log(data)
        setBookname(data.book_name)
        setAuthor(data.author)
        setDescription(data.description)
        setprice(data.price)
        setImage(data.image)
        setCategory_id(data.category_id)
        setIs_available('true')

    }


    const HandleSubmit = async(e) => {

      console.log(category_id)
      e.preventDefault()
        
        const bookData = new FormData();
        bookData.append('book_name',book_name)
        bookData.append('author',author)
        bookData.append('description',description)
        bookData.append('price',price)
        bookData.append('image',image,)
        bookData.append('category',category_id)
        bookData.append('is_available',is_available)
        
    await axios.put(`mastar/editbook/${id}/`,bookData,    
    {headers:{Authorization:`Bearer ${authTokens?.token}`, 'content-type': 'multipart/form-data'} } ).then((response)=>{
      console.log(response.data)
      if (response.status===200){
        console.log("success")
      }
    })  
    .catch((err)=>{
      console.log(err.response.data.detail,"erorr")
     console.log(bookData)
    }) 
}

useEffect(()=>{
  categoryCall()
  loadBooks()
},[]);


const categoryCall=()=>{
  axios.get('mastar/category').then(res=>{
    console.log(res.data)
    setCategory(res.data)
   }).catch(e=>console.log(e))
}

console.log(is_available)
  const handleCheck=()=>{
    if(is_available==='True'){
      setIs_available('False')
    }else{
      setIs_available('True')
    }
  }

  return (
    <div>

<Anavebar/>
 <h1 className='title mb-5 mt-5'>Add Your Book</h1>
      <Form className=' m-5' onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Book Name</Form.Label>
              <Form.Control name='turfName' type="text" placeholder="Enter book name" onChange={(e)=>setBookname(e.target.value)} value={book_name} />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
      
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter slug</Form.Label>
              <Form.Control name='slug' type="text" placeholder="Enter slug " onChange={(e)=>setSlug(e.target.value)} value={slug} />
            </Form.Group> */}
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Book Author</Form.Label>
              <Form.Control name='size' type="text" placeholder="Enter Book Author" onChange={(e)=>setAuthor(e.target.value)} value={author} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control name='description' type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)} value={description} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Price</Form.Label>
              <Form.Control name='price' type="text" placeholder="Enter Price" onChange={(e)=>setprice(e.target.value)} value={price} />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>upload image1</Form.Label>
              <Form.Control name='image' type="file" placeholder="upload image1" onChange={(e)=>setImage(e.target.files[0])}/>
            </Form.Group>


            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Enter category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category_id}
          label="Enter category"
          onChange={(e)=>setCategory_id(e.target.value)} 
        >
          {category.map((obj)=>
          <MenuItem value={obj.id}>{obj.category_name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box> <br/>
      
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check is available" onChange={handleCheck} value={is_available} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>


    </div>
  )
}

export default EditBook