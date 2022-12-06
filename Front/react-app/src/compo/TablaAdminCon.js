import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = "http://localhost:3300/api/admin/readConductors"
//const url = "http://jsonplaceholder.typicode.com/users"

export default function VerConductores () {

   
    useEffect(()=>{
        const options = {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
          }
    
        fetch(url,options)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
    }, [])




    const mostrarData = (data) =>{
        console.log(data)
        let tbody =''
        for(let i=0;i<data.length;i++){
            tbody+=`<tr><td>${data[i].Nombre}</td><td>${data[i].Celular}</td><td>${data[i].Prioridad}</td>
            <td class="text-center"><a class="btnEditar btn btn-primary" >Editar</a></td><td class="text-center"><a class="btnEliminar btn btn-danger"  >Eliminar</a></td></tr>`

        } 
        document.getElementById('data').innerHTML = tbody
    }

    


    return(
        <div>
        <div className='container'>
        <button id="btnCrear" type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalArticulo" >
                Crear Nuevo Conductor
                </button>

                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Nombre Conductor</th>
                                    <th>Celular</th>
                                    <th>Prioridad</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                    
                                </tr>
                            </thead>
                            <tbody id="data">
                               
                            </tbody>
                        </table>

                    </div>

                </div>


            </div>
            </div>







        

    )
    
        
}

