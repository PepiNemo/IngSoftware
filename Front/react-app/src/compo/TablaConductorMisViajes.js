
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


//const url = "http://jsonplaceholder.typicode.com/users"

export default function ConductorMisViajes() {
    //const navigate = useNavigate()
    const [viajesConductor, setViajes] = useState()
    const [estadoViaje, setEstadoViaje] = useState()


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
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
    }, [])




    const mostrarData = (data = viajesConductor, filter = estadoViaje) => {

        let tbody = ''
        console.log(data)
        let viajesSH = data["Viajes SH"];
        console.log(viajesSH)
        if (viajesSH != undefined) {
            console.log("Viajes SH: ", viajesSH)
            //document.getElementById('filaSH').innerHTML = `<h2>Viajes Stake Holder</h2>`;
            let thead = `<tr>
                            <th>Nombre Empresa</th>
                            <th>Nombre SH</th>
                            <th>Direccion de Origen</th>
                            <th>Direccion de Destino</th>
                            <th>Hora de termino</th>
                            <th>Celular pasajero representante</th>
                            <th>Numero_Maletas</th>
                            <th>Tamaño_Maletas</th>
                        </tr>`;
            document.getElementById('EncabezadoSH').innerHTML = thead

            for (let i = 0; i < viajesSH.length; i++) {
                tbody += `<tr>
                    <td>${viajesSH[i].Nombre_Empresa}</td>
                    <td>${viajesSH[i].Nombre_StakeHolder}</td>
                    <td>${viajesSH[i].Direccion_Origen1}</td>
                    <td>${viajesSH[i].Direccion_Destino1}</td>
                    <td>${viajesSH[i].Fecha_Hora_Termino}</td>
                    <td>${viajesSH[i].Celular_Pasajero_Representante}</td>
                    <td>${viajesSH[i].Numero_Maletas}</td>
                    <td>${viajesSH[i].Tamaño_Equipaje}</td>
                    </tr>`
            }
        }



        let tbody2 = ''
        let viajesComunes = data["Viajes comunes"]
        if (viajesComunes != undefined) {
            console.log("Viajes Comunes", viajesComunes)
            // document.getElementById('fila').innerHTML = `<h2>Viajes Pasajeros comunes</h2>`
            let thead2 = `<tr>
                                <th>Nombre Pasajero</th>
                                <th>Direccion de Origen</th>
                                <th>Direccion de Destino</th>
                                <th>Celular</th>
                                <th>Hora_Inicio</th>
                                <th>Numero_Maletas</th>
                                <th>Tamaño_Maletas</th>
                            </tr>`
            document.getElementById('Encabezado2').innerHTML = thead2
            for (let i = 0; i < viajesComunes.length; i++) {
                tbody2 += `<tr>
                    <td>${viajesComunes[i].Nombre_Pasajero}</td>
                    <td>${viajesComunes[i].Dire_Inicio}</td>
                    <td>${viajesComunes[i].Dire_Destino}</td>
                    <td>${viajesComunes[i].Celular}</td>
                    <td>${viajesComunes[i].Hora_Inicio}</td>
                    <td>${viajesComunes[i].Numero_Maletas}</td>
                    <td>${viajesComunes[i].Tamaño_Maletas}</td>
                    </tr>`

            }
        }
        if (viajesSH == undefined && viajesComunes == undefined) {
            document.getElementById('Tabla').innerHTML = "<h1> No hay viajes Aceptados a realizar </h1>"
        }

        document.getElementById('data').innerHTML = tbody
        document.getElementById('data2').innerHTML = tbody2

    }

    return (
        <div className='container'>
            <form >

            </form>
            <div className='row' id="filaSH">
                <div className='col'>
                    <table className='table' id='Tabla' >
                        <thead className='table-primary' id='EncabezadoSH'>
                        </thead>
                        <tbody id="data">

                        </tbody>
                    </table>
                </div>


            </div>


            <div className='row' id='fila'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary' id="Encabezado2">

                        </thead>
                        <tbody id="data2">

                        </tbody>
                    </table>
                </div>


            </div>

        </div>

    )



}

