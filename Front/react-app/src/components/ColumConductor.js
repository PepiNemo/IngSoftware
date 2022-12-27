export function ColumConductor(props) {
    return (
        <tr>
            <td>{props.Nombre}</td>
            <td>{props.Username}</td>
            <td>{props.Celular}</td>
            <td>{props.Prioridad}</td>
            <td><a className="btn btn-primary" onClick={() => props.EditarConductor(props._id)}>Editar</a></td>
            {
                (props.Prioridad > 0)
                    ? <td><a className="btn btn-warning" onClick={() => props.DeshabilitarConductor(props._id, props.Prioridad)}>Deshabilitar</a></td>
                    : <td><a className="btn btn-success" onClick={() => props.DeshabilitarConductor(props._id, props.Prioridad)}>Habilitar</a></td>
                
                }
            
            <td><a className="btn btn-danger" onClick={() => props.EliminarConductor(props._id)}>Eliminar</a></td>
        </tr>
    )
}