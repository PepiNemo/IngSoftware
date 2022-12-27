export function ColumnaTarifa(props) {
    return (
        <tr>
            <td>{props.Lugar}</td>
            <td>{props.Precio}</td>
            <td><a className="btn btn btn-primary" onClick={()=> props.Editar(props)} >Editar</a></td>
            <td><a className="btn btn-danger" onClick={()=> props.Eliminar(props)}>Eliminar</a></td>
        </tr>
    )
}