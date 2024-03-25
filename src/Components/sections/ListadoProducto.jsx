import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'; // Importa el componente Table específicamente
import Producto from './Producto';

const ListadoProducto = () => {
  // llamamos antes de que se monte (ADM)-Luego nos comunicamos a a la api
  const [productos, setProductos]=useState([]);
  const API=import.meta.env.VITE_API;
  
  const getProductos=async()=>{ 
    try {
      const response=await fetch (`${API}/productos`)
      const resJson=await response.json(); // metodo de response para tranformar a json
      console.log ("resJSON", resJson);
      setProductos(resJson);
      
    } catch (error){
      console.log("ERROR", error);
    }
  };
  useEffect(()=>{
    getProductos();

    return ()=>{
      setProductos([]);
     }

  }, []); // le pasamos array vacio para que solo se ejecute solo en el montaje. 
 // console.log("State Productos->", productos) 
 

 return (
    <>
    <div className='container-fluid'>
      <div className='text-center'>
        <h2>Listado Productos</h2>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Descripcion</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
                    {/* creamos para extraer los elementos.  */}
                    {productos.map((element)=> {
            return(
              <Producto producto={element} key={element.id}/>
            )
          })}
        
          </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ListadoProducto;
