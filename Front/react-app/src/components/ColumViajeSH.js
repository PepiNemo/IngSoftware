import { useEffect, useState } from "react"


export function ColumViajeSH(props){

    

    const AceptarViaje = (event) => {
        event.preventDefault()
        const url = "http://localhost:3300/api/conductor/aceptarViajeSH"
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({_id: props._id})
        }

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data?.error);
                if (data?.message) {
                    alert(data.message)
                    window.location.reload()
                }
            })
            .catch(error => console.log(error))
    }

    return(
    <tr>
        {(props.Rol == "conductor")?<td>{props.Nombre_Empresa}</td>: null}
        <td>{props.Nombre_StakeHolder}</td>
        <td>{props.Direccion_Origen1}</td>
        <td>{props.Fecha_Hora_Inicio}</td>
        <td>{props.Direccion_Destino1}</td>
        <td>{props.Fecha_Hora_Termino}</td>
        <td>{props.Nombre_Pasajero_Representante}</td>
        <td>{props.Celular_Pasajero_Representante}</td>
        <td>{props.Numero_Pasajeros}</td>
        <td>{props.Numero_Maletas}</td>
        <td>{props.Tamaño_Equipaje}</td>
        {
            (props.Aceptar == "True")
            ?<td><a className="btn btn btn-primary" onClick={AceptarViaje} >Aceptar</a></td>
            : null
        }

        {
            (props?.EditarViajeSH)
            ?<td><a className="btn btn btn-primary" onClick={() => props.EditarViajeSH(props._id)}>Editar</a></td>
            : null
        }

        {
            (props?.EliminarViajeSH)
            ?<td><a className="btn btn btn-danger" onClick={() => props.EliminarViajeSH(props._id)}>Eliminar</a></td>
            : null
        }
        
        </tr>
        )
}