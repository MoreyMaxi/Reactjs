import { useState } from "react";
import {Form, Button} from "react-bootstrap"
import { validarCategoria } from "../../helpers/validaciones,js";
import clsx from 'clsx';
import * as Yup from "yup";
import { useFormik } from "formik";

const CrearProducto = () => {
/*
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [category, setCategory]=useState('');
*/
// usamos formik, creamos un esquema
const ProductSchema=Yup.object().shape(
    {
        title: Yup.string().min(4,'min 4 caract.').max(20,'max 20 caract.').required('El titulo es requerido'),
        description: Yup.string().min(10,'Escribe más de 10 caract.').max(200).required('La descripcion es requerida'),
        category: Yup.string().required('La categoria es requerida.'),
    }
);
const initialValues={
    title:'',
    description:'',
    category:''
};

const formik=useFormik(
    {
    initialValues,
    validationSchema: ProductSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) =>{
        console.log("values de formik:",values);
        }
    }
);



/*
const handleSubmit=(e)=> {
    e.preventDefault();
    console.log("desde sumbit"); // recibe el vento sumbit, no actualiza pagina
const nuevoProducto={
    titulo: title,
    descripcion: description,
    category:category
};
console.log("NUEVOPRODUCTO", nuevoProducto)
}*/
    return (
        <>
            <div className="container py-3 my-3">
                <div className="text-center">
                    <h1>Crear producto</h1>
                </div>
            <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el titulo del producto" minLength={4} 
                maxLength={15} 

                /*value={title}
                onChange={(e)=> {
                    setTitle(e.currentTarget.value);
                }}*/

                name="title"
                {...formik.getFieldProps('title')} // esto obtiene todas las propiedades y validaciones
                className={clsx('form-control',
                {
                    'is-invalid': formik.touched.title && formik.errors.title // cuando detecta el click lo valida
                },
                {
                    'is-valid':formik.touched.title && !formik.errors.title
                    
                })}
                />
                {formik.touched.title && formik.errors.title && (
                    <div className="mt-2 text-danger">
                    <span role="alert">{formik.errors.title}</span>
                    </div>
                )}
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Ingrese una descripcion" as="textarea" rows={3} minLength={20} 
                maxLength={200}
                /*
                value={description}
                onChange={(e)=> {
                    setDescription(e.currentTarget.value);

                }}*/
                name="description"
                {...formik.getFieldProps('description')} // esto obtiene todas las propiedades y validaciones
                className={clsx('form-control',
                {
                    'is-invalid': formik.touched.description && formik.errors.description // cuando detecta el click lo valida
                },
                {
                    'is-valid':formik.touched.description && !formik.errors.description
                    
                })}
                />
                {formik.touched.description && formik.errors.description && (
                    <div className="mt-2 text-danger">
                    <span role="alert">{formik.errors.description}</span>
                    </div>
                )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="category">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="category"
                /*   value={category}
                   onChange={(e)=> {
                    let resultado= validarCategoria(e.currentTarget.value); // esto devuelvo o true o false
                    console.log("resultado de validar",resultado)
                    setCategory(e.currentTarget.value);
                }} className={clsx("form-select",
                {
                    "is-valid": validarCategoria(category)
                },
                {
                    "is-invalid": !validarCategoria(category)        

                })}*/
                name="category"
                {...formik.getFieldProps('category')} // esto obtiene todas las propiedades y validaciones
                className={clsx('form-control',
                {
                    'is-invalid': formik.touched.category && formik.errors.category // cuando detecta el click lo valida
                },
                {
                    'is-valid':formik.touched.category && !formik.errors.category
                    
                })}
                >
                    <option value="">Seleccione una categoria</option>
                    <option value="Remeras">Remeras</option>
                    <option value="Buzos">Buzos</option>
                    <option value="Pantalones">Pantalones</option>
                </Form.Select>
                {formik.touched.category && formik.errors.category && (
                    <div className="mt-2 text-danger">
                    <span role="alert">{formik.errors.category}</span>
                    </div>
                )}
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