
export function ColumViaje(props){

    const url = "http://localhost:3300/api/conductor/aceptarViaje"

    const onClick = (event) => {
        event.preventDefault()
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

    return(<tr>
        <td>{props.Nombre_Pasajero}</td>
        <td>{props.Dire_Inicio}</td>
        <td>{props.Dire_Destino}</td>
        <td>{props.Celular}</td>
        <td>{props.Hora_Inicio}</td>
        <td>{props.Numero_Maletas}</td>
        <td>{props.Tamaño_Maletas}</td>
        {
            (props.Aceptar == "True")
            ?<td><a className="btn btn btn-primary" onClick={onClick} >Aceptar</a></td>
            : null
        }
        </tr>
    )
}