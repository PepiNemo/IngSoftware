export function ColumStakeHolder(props) {
    return (
        <tr>
            <td>{props.Nombre_Empresa}</td>
            <td>{props.Rut_Empresa}</td>
            <td>{props.Correo}</td>
            <td>{props.Numero_Contacto}</td>
            <td><a className="btn btn-primary" onClick={()=> props.EditarSH(props._id)} >Editar</a></td>            
            <td><a className="btn btn-danger" onClick={()=> props.EliminarSH(props._id)}>Eliminar</a></td>
        </tr>
    )
}