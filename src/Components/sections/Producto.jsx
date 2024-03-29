import { Button } from "react-bootstrap";
// props que se llama productos 
const Producto = ({ producto }) => {
  return (
    <>
      <tr>
        <td>{producto.ID}</td>
        <td>{producto.title}</td>
        <td>{producto.description}</td>
        <td>{producto.category}</td>
        <td className="d-flex justify-content-around">
          <Button type="button" variant="warning">
            Editar
          </Button>
          <Button type="button" variant="danger">
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Producto;
