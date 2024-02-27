import {Form, Button} from "react-bootstrap"
const CrearProducto = () => {
const handleSubmit=(e)=> {
    e.preventDefault();
    console.log("desde sumbit");
}
    return (
        <>
            <div className="container py-3 my-3">
                <div className="text-center">
                    <h1>Crear producto</h1>
                </div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el titulo del producto" minLength={4} maxLength={15} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Ingrese una descripcion" as="textarea" rows={3} minLength={20} maxLength={200}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
            <Form.Label>Categoria</Form.Label>
                <Form.Select aria-label="category">
                    <option>Seleccione una categoria</option>
                    <option value="Remeras">Remeras</option>
                    <option value="Buzos">Buzos</option>
                    <option value="Pantalones">Pantalones</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Guardar
            </Button>
            </Form>
            </div>
        </>
    ) ;
} ;

export default CrearProducto ;