
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const url = "http://localhost:3300/api/admin/readViajesSHAdmin"
//const url = "http://jsonplaceholder.typicode.com/users"

export default function AdminViajesSH(){ 
    const navigate = useNavigate()
    const [ViajesSH, setViajesSH] = useState()
    const [Nombre_Empresa, setNombre_Empresa] = useState()


    const handleChange = (event) => {
        console.log(event.target.value)
        setNombre_Empresa(event.target.value);
      };

    const onSubmit = (event) => {
        event.preventDefault();
        mostrarData()
    };

    useEffect(()=>{
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' }
          }
    
        fetch(url,options)
            .then(response => response.json())
            .then(data => {setViajesSH(data); mostrarData(data)})
            .catch(error => console.log(error))
    }, [])




    const mostrarData = (data=ViajesSH, filter=Nombre_Empresa) =>{
        console.log(data)
        if(filter!=null){
            data = data.filter(stake => stake.Nombre_Empresa == filter)
        }
        
        let tbody =''
        for(let i=0;i<data.length;i++){
            tbody+=`<tr><td>${data[i].Nombre_Empresa}</td><td>${data[i].Nombre_StakeHolder}</td><td>${data[i].Direccion_Destino1}</td><td>${data[i].Numero_Pasajeros}</td></tr>`

        } 
        document.getElementById('data').innerHTML = tbody
    }
    return(
        <div className='container'>
                <form >
                    <input onChange={handleChange} type="text" placeholder='Buscar Empresa' className='form-control'/>
                    <button className="btn btn-primary" onClick={onSubmit}>Filtrar</button>
                </form>
                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Nombre Empresa</th>
                                    <th>Nombre del StakeHolder solicitante</th>
                                    <th>Direccion de destino</th>
                                    <th>Numero de pasajeros</th>
                        
                                </tr>
                            </thead>
                            <tbody id="data">
                               
                            </tbody>
                        </table>

                    </div>

                </div>


            </div>
        

    )
    
        
}
