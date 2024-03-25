// sistema de grilla
import { Container,Row } from "react-bootstrap";
import { useEffect,useState } from "react";
import axios from "axios";
import CardProducto from "../sections/CardProducto";
const Home = () => {
    const [productos, setProductos]=useState([]);
  const API=import.meta.env.VITE_API;
  
  const getProductos=async()=>{ 
    try {
        const response=await axios.get(`${API}/productos`);
        console.log("RESPONSE-AXIOS>",response);
        setProductos(response.data);     
 ;
      
    } catch (error){
      console.log("ERROR", error);
    }
  };
  useEffect(()=>{
    getProductos();

    return ()=>{
      setProductos([]);
     }

  }, []);

    return (
        <>
        <div>
            <div className="text-center">
                <h2>Catalogo de productos</h2>
            </div>
         <div className="my-5">
            <Container>
            <Row>
            {productos.map((element,index)=>
            {
                return ( 
                    <CardProducto producto={element} key={index}/>
                )
            })}
            </Row>
            </Container>
        </div>
        </div>
        </>
    ) ;
} ;

export default Home;
