import { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import reactLogo from './assets/react.svg';

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    getProductos();
  }, []);

  console.log(productos);

  return (
    <>
      <Navbar />
      <div>
        <h1>Proyecto Store</h1>
      </div>
      {productos.map((producto) => (
        <div key={producto.id}>
          <h2 style={{color:"black"}}>{producto.title}  </h2>
          <img src={producto.image} alt="" width={100} height={100} />
          <h4>{producto.description}</h4>
        </div>
      ))}
    </>
  );
}

export default App;