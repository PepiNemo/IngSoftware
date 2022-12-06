
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


//const url = "http://jsonplaceholder.typicode.com/users"

export default function ConductorMisViajes(){
    //const navigate = useNavigate()
    const [viajesConductor, setViajes] = useState()
    const [estadoViaje, setEstadoViaje] = useState()


    const handleChange = (event) => {
        console.log(event.target.value)
        setEstadoViaje(event.target.value);
      };

    const onSubmit = (event) => {
        event.preventDefault();
        mostrarData()
    };

    useEffect(()=>{
        const url = "http://localhost:3300/api/conductor/readViajesConductor"

        const options = {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' }
          }
    
        fetch(url,options)
            .then(response => response.json())
            .then(data =>  mostrarData(data))
            .catch(error => console.log(error))
    }, [])




    const mostrarData = (data=viajesConductor, filter=estadoViaje) =>{
        console.log("Viajes SH: ",data["Viajes SH"])
        console.log("Viajes Comunes",data["Viajes comunes"])
         if(filter!=null){
            data = data.filter(stake => stake.estadoViaje == filter)
        }
        
        let tbody =''
        let data2=data
        data=data2["Viajes SH"]
        for(let i=0;i<data.length;i++){
            tbody+=`<tr><td>Viaje SH</td><td>${data[i].Estado_Viaje}</td><td>${data[i].Nombre_Empresa}</td><td>${data[i].Nombre_StakeHolder}</td></tr>`

        }
        data=data2["Viajes comunes"]
        for(let i=0;i<data.length;i++){
            tbody+=`<tr><td>Viajes Comunes</td><td>${data[i].Estado_Viaje}</td><td>${data[i].Nombre_Empresa}</td><td>${data[i].Nombre_StakeHolder}</td></tr>`

        }  
        document.getElementById('data').innerHTML = tbody 
    }
    return(
        <div className='container'>
                <form >
                  
                </form>
                <div className='row'>
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Tipo de viaje</th>
                                    <th>Estado</th>
                                    <th>Nombre Empresa</th>
                                    <th>Nombre SH</th>
                        
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

