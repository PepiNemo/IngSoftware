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

/*     const ActualizarViaje = (event) => {
        event.preventDefault()
        const url = "http://localhost:3300/api/stakeHolder/updateViajeSH";
        console.log(JSON.stringify(formValues));
        const options = {
          method: "PATCH",
          credentials: "include",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(formValues),
        };
    
        fetch(url, options).then((response) => {
          if (!response.ok) {
            alert("Codigo de error desde el servidor");
            response.json().then((json) => alert(json.message));
          } else {
            response.json().then((json) => alert(json.message));
            //navigate("/");
          }
        });
    } */

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
        
        </tr>
        )
}