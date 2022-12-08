import { useEffect } from "react";


export function RowComponente(props){

    useEffect(()=> {
        console.log("Desde el Row componente: ",props.children.Nombre_Empresa)
    })

    const onClick = (event)=>{
        event.preventDefault();
        console.log(props.children._id);
    }

    return(<tr>
        <td>{props.children.Nombre_Empresa}</td>
        <td>props.children.Nombre_StakeHolder</td>
        <td>props.children.Direccion_Origen1</td>
        <td>props.children.Direccion_Destino1</td>
        <td>props.children.Fecha_Hora_Termino</td>
        <td>props.children.Celular_Pasajero_Representante</td>
        <td>props.children.Numero_Maletas</td>
        <td>props.children.Tamaño_Equipaje</td>
        <td><a class="btn btn btn-primary" >Aceptar</a></td>
        </tr>)
}