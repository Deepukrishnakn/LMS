
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'  
import AddBook from './components/admin/AddBook';
import AllBooks from './components/admin/AllBooks';
import EditBook from './components/admin/EditBook';
import { AuthProvider } from './context/authContext';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivetRouts from './Utils/PrivetRouts';
import AdminprivetRouts from './Utils/AdminprivetRouts';
import OnlyAdminPrivetRoutes from './Utils/OnlyAdminPrivetRoutes';


function App(){
  return (
    <div>

     <BrowserRouter>
     <AuthProvider>
      <Routes>
      <Route path='register/' element ={<RegisterPage/>} />
      <Route path='/' element ={<LoginPage/>} />

      <Route element ={<PrivetRouts/>}>
      <Route element ={<OnlyAdminPrivetRoutes/>}> 
      <Route path='/home' element ={<HomePage/>} />
      </Route>
      <Route element={<AdminprivetRouts/>} >
      <Route path='/addbook' element ={<AddBook/>} />
      <Route path='/adminhome' element ={<AdminPage/>} />
      <Route path='/allbooks' element ={<AllBooks/>} />
      <Route path='/editbook/:id' element ={<EditBook/>} />
      </Route>
      </Route>

    </Routes>
    </AuthProvider>
  </BrowserRouter>
    </div>
  );
}

export default App;

