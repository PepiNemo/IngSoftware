import {FormImput, FormImput2, FormImputSeleccion } from "./formImput"


export function FormCrearConductor(props) {
    return (
        <form className="row g-3" >

            <FormImput 
                label="Nombre del conductor"
                type="text"
                name="Nombre"
                value={props.Nombre}
                onChange={props.handleChange}
            />


            <FormImput 
                label="Rut del Conductor"
                type="text"
                name="Rut"
                value={props.Rut}
                onChange={props.handleChange}
            />

            <FormImput 
                label="Username"
                type="text"
                name="Username"
                value={props.Username}
                onChange={props.handleChange}
            />

            <FormImput 
                label="Password"
                type="password"
                name="Username"
                value={props.Password}
                onChange={props.handleChange}
            />


            <FormImput 
                label="Correo electronico"
                type="text"
                name="Correo"
                value={props.Correo}
                onChange={props.handleChange}
            />



            <FormImput 
                label="Numero de Contacto"
                type="text"
                placeholder="Ejemplo: +56979826650"
                name="Celular"
                value={props.Celular}
                onChange={props.handleChange}
            />


            <FormImput 
                label="Prioridad"
                type="number"
                name="Prioridad"
                value={props.Prioridad}
                onChange={props.handleChange}
            />


            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </div>
        </form>
    )
}