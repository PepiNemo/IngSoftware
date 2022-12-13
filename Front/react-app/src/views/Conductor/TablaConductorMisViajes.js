
import { useState, useEffect } from 'react'
import { ColumViaje } from '../../components/ColumViaje'
import { ColumViajeSH } from '../../components/ColumViajeSH'


//const url = "http://jsonplaceholder.typicode.com/users"

export function ConductorMisViajesAceptados() {
    //const navigate = useNavigate()
    const [viajesConductor, setViajes] = useState()


    useEffect(() => {
        const url = "http://localhost:3300/api/conductor/readViajesConductor"

        const options = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ Estado_Viaje: "Aceptado" })
        }

        fetch(url, options)
            .then(response => response.json())
            .then(data => setViajes(data))
            .catch(error => console.log(error))
        console.log(viajesConductor)
    }, [])

        const headViajeSH = <tr>
        <th>Nombre Empresa</th>
        <th>Nombre StakeHolder</th>
        <th>Direccion de Origen</th>
        <th>Hora de Inicio</th>
        <th>Direccion de Destino</th>
        <th>Hora de termino</th>
        <th>Nombre Pasajero</th>
        <th>Celular pasajero</th>
        <th>Numero de pasajeros</th>
        <th>Numero_Maletas</th>
        <th>Tamaño_Maletas</th>
    </tr>

    const headViaje = <tr>
        <th>Nombre Pasajero</th>
        <th>Direccion de Origen</th>
        <th>Direccion de Destino</th>
        <th>Celular</th>
        <th>Hora_Inicio</th>
        <th>Numero_Maletas</th>
        <th>Tamaño_Maletas</th>
    </tr>



    return (
        <div className='container'>
            <form >

            </form>
            <div className='row' id="filaSH">
                <div className='col'>
                {(viajesConductor?.ViajesSH) ? <h2> Viajes de StakeHolder </h2> : null}

                    <table className='table' id='Tabla' >
                        <thead className='table-primary' id='EncabezadoSH'>
                            {(viajesConductor?.ViajesSH) ? headViajeSH : null}
                        </thead>
                        <tbody id="data">
                            {
                                (viajesConductor?.ViajesSH) 
                                    ? viajesConductor?.ViajesSH.map(viaje => <ColumViajeSH key={viaje._id} {...viaje}/>)
                                    : undefined
                            }
                        </tbody>
                    </table>
                </div>


            </div>


            <div className='row'>
                <div className='col'>
                    {(viajesConductor?.Viajescomunes) ? <h2> Viajes Comunes </h2> : null}
                    <table className='table'>
                        <thead className='table-primary' id="Encabezado2">
                            {(viajesConductor?.Viajescomunes) ? headViaje : null}
                        </thead>
                        <tbody id="data2">
                            {(viajesConductor?.Viajescomunes) 
                                ? viajesConductor.Viajescomunes.map(viaje => <ColumViaje key={viaje._id} {...viaje}/>) 
                                : undefined
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )



}

