import ListadoProducto from "../sections/ListadoProducto";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
 
const Administracion = () => {
    const navigate= useNavigate();
    return (
        <>
            <div className="container my-3 py-3">
                <Button variant="primary" onClick={()=>{navigate("/crear-producto")}}>Crear Producto</Button>
                <ListadoProducto/>
            </div>
        </>
    ) ;
} ;

export default Administracion;