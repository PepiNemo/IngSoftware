
import {useState, useEffect} from 'react'
import { ColumViajeSH } from "../../components/ColumViajeSH"



export function SHMisViajes () {
    const [viajesSHSolicitados, setViajesS] = useState([])
    const [viajesSHAceptados, setViajesA]= useState([])
    const [viajesSHRealizados, setViajesR] = useState([])


    useEffect(()=>{
        const url = "http://localhost:3300/api/stakeHolder/readViajesSH"

        const options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' }
          }
    
        fetch(url,options)
            .then(response => response.json())
            .then(data =>  {
                setViajesS(data.filter(viaje => viaje.Estado_Viaje == "Solicitado"))
                setViajesA(data.filter(viaje => viaje.Estado_Viaje == "Aceptado"))
                setViajesR(data.filter(viaje => viaje.Estado_Viaje == "Realizado"))
                })
            .catch(error => console.log(error))
    }, [])



    const head = <tr>
        <th>Nombre SH</th>
        <th>Dir. Origen</th>
        <th>Fecha Hora Inicio</th>
        <th>Dir. Origen</th>
        <th>Fecha Hora Termino</th>
        <th>Pasajero Representante</th>
        <th>Celular Representante</th>
        <th>Numero de Pasajeros</th>
        <th>Numero de Maletas</th>
        <th>Tamaño de Maletas</th>
    </tr>

    return(
        <div className='container'>

                <div className='row'>
                    {
                        (viajesSHSolicitados.length == 0) 
                            ? null
                            : <h2>Viajes solicitados</h2>
                    }
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                {
                                    (viajesSHSolicitados.length > 0)? head: null
                                }
                            </thead>
                            <tbody id="data">
                               {
                                (viajesSHSolicitados.length > 0)
                                ? viajesSHSolicitados.map(viaje => <ColumViajeSH  key={viaje._id} {...viaje} />)
                                : null
                               }
                            </tbody>
                        </table>

                    </div>
                </div>

                <div className='row'>
                    {
                        (viajesSHAceptados.length == 0) 
                            ? null
                            : <h2>Viajes Aceptados</h2>
                    }
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                {
                                    (viajesSHAceptados.length > 0)? head: null
                                }
                            </thead>
                            <tbody id="data">
                               {
                                (viajesSHAceptados.length > 0)
                                ? viajesSHAceptados.map(viaje => <ColumViajeSH  key={viaje._id} {...viaje} />)
                                : null
                               }
                            </tbody>
                        </table>

                    </div>
                </div>

                <div className='row'>
                    {
                        (viajesSHRealizados.length == 0) 
                            ? <h2>Hasta ahora no has realizado ningun viaje.</h2> 
                            : <h2>Viajes realizados</h2>
                    }
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                {
                                    (viajesSHRealizados.length > 0)? head: null
                                }
                            </thead>
                            <tbody id="data">
                               {
                                (viajesSHRealizados.length > 0)
                                ? viajesSHRealizados.map(viaje => <ColumViajeSH  key={viaje._id} {...viaje} />)
                                : null
                               }
                            </tbody>
                        </table>

                    </div>
                </div>


            </div>
        

    )

    
        
}
