import { useState } from "react"
import { FormImput } from "./formImput"


export function FormCrearStakeHolder(props) {
    const [stakeHolder, setStakeHolder] = useState({
        Nombre_Empresa: props.Nombre_Empresa,
        Rut_Empresa: props.Rut_Empresa,
        Correo: props.Correo,
        Numero_Contacto: props.Numero_Contacto,
        Username: props.Username,
        Password: props.Password,
        Imagen_URL: "www.google.com"
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStakeHolder({ ...stakeHolder, [name]: value });
    };

    return <form className="row g-3" action="">
        <FormImput
            label="Nombre empresa"
            type="text"
            name="Nombre_Empresa"
            value={stakeHolder.Nombre_Empresa}
            onChange={handleChange}
        />

        <FormImput
            label="Rut Empresa"
            type="text"
            name="Rut_Empresa"
            value={stakeHolder.Rut_Empresa}
            onChange={handleChange}
            className="form-control"
        />

        <FormImput
            htmlFor="inputCorreo4"
            ClassNames=""
            label="Correo electronico"
            type="Correo"
            name="Correo"
            value={stakeHolder.Correo}
            onChange={handleChange}
        />

        <FormImput
            label="Numero de Contacto"
            type="text"
            name="Numero_Contacto"
            value={stakeHolder.Numero_Contacto}
            onChange={handleChange}
        />

        <FormImput
            label="Username"
            type="text"
            name="Username"
            value={stakeHolder.Username}
            onChange={handleChange}
        />

        <FormImput
            label="Password"
            type="Password"
            name="Password"
            value={stakeHolder.Password}
            onChange={handleChange}
        />


        <div className="col-12">
            {
                (props?.SaveEditarSH)
                    ? <a className="btn btn-primary" onClick={() => props.SaveEditarSH(props._id, stakeHolder)}>Actualizar</a>
                    : null
            }

            {
                (props?.SaveCrearSH)
                    ? <a className="btn btn-primary" onClick={() => props.SaveCrearSH(stakeHolder)}>Crear</a>
                    : null
            }


        </div>
    </form>
}