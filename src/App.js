import './App.css';
import Nav from './components/nav';
import { Routes, Route } from "react-router-dom";
import Signup from './components/signup';
import PrivateComponent from './components/privateComponent';
import Login from './components/login';
import AddProduct from './components/product/addProduct';
import Products from './components/product/products';
import UpdateProduct from './components/product/updateProduct';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/logout" element={<h3>logout</h3>} />
          </Route>
          
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
       
      </Routes>
    </>
  );
}

export default App;