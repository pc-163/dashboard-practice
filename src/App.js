import './App.css';
import Nav from './components/nav';
import { Routes, Route } from "react-router-dom";
import Signup from './components/signup';
import PrivateComponent from './components/privateComponent';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<h3>Dashboard</h3>} />
          <Route path="/products" element={<h3>products</h3>} />
          <Route path="/add" element={<h3>add</h3>} />
          <Route path="/update" element={<h3>update</h3>} />
          <Route path="/logout" element={<h3>logout</h3>} />
          </Route>
          
          <Route path="/register" element={<Signup />} />
       
      </Routes>
    </>
  );
}

export default App;
