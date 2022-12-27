import { useState } from "react"
import {FormImput } from "./formImput"


export function FormCrearConductor(props) {
    const [conductor, setConductor] = useState({
        "Nombre": props.Nombre,
        "Rut": props.Rut,
        "Username": props.Username,
        "Password": props.Password,
        "Correo": props.Correo,
        "Celular": props.Celular,
        "Prioridad": props.Prioridad,
        "Imagen_URL": "www.google.com"
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setConductor({ ...conductor, [name]: value });
    };

    return (
        <form className="row g-3" >

            <FormImput 
                label="Nombre del conductor"
                type="text"
                name="Nombre"
                value={conductor.Nombre}
                onChange={handleChange}
            />


            <FormImput 
                label="Rut del Conductor"
                type="text"
                name="Rut"
                value={conductor.Rut}
                onChange={handleChange}
            />

            <FormImput 
                label="Username"
                type="text"
                name="Username"
                value={conductor.Username}
                onChange={handleChange}
            />

            <FormImput 
                label="Password"
                type="password"
                name="Password"
                value={conductor.Password}
                onChange={handleChange}
            />


            <FormImput 
                label="Correo electronico"
                type="text"
                name="Correo"
                value={conductor.Correo}
                onChange={handleChange}
            />



            <FormImput 
                label="Numero de Contacto"
                type="text"
                placeholder="Ejemplo: +56979826650"
                name="Celular"
                value={conductor.Celular}
                onChange={handleChange}
            />


            <FormImput 
                label="Prioridad"
                type="number"
                name="Prioridad"
                value={conductor.Prioridad}
                onChange={handleChange}
            />


            <div className="col-12">
                {
                    (props?.SaveEditarConductor)
                        ? <a className="btn btn-primary" onClick={()=> props.SaveEditarConductor(props._id, conductor)}>Actualizar</a>
                        : null
                }

                {
                    (props?.SaveCrearConductor)
                        ? <a className="btn btn-primary" onClick={()=> props.SaveCrearConductor(conductor)}>Crear</a>
                        : null
                }

                
            </div>
        </form>
    )
}