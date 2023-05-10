
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from "./components/Navbar"

function App() {

  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((res)=> setProductos(res))
    }, []);
    
    console.log(productos);
  

  return (
  <>
    <Navbar/> 
    <div><h1>Proyecto Store</h1></div>
    
   </> )
}

export default App
