
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Fetch } from "../../services/Fetch"

import { ColumViajeSH } from "../../components/ColumViajeSH"
import { FormPedirViajeSH } from "../../components/FormPerdirViajeSH"


export function AdminViajesSH() {
    const navigate = useNavigate()

    //State and function of Table and filter.
    const [ViajesSH, setViajesSH] = useState([])
    const [Nombre_Empresa, setNombre_Empresa] = useState()
    const [update, setUpdate] = useState(false)
    const FilterEmpresa = async (event) => {
        event.preventDefault();
        setViajesSH(ViajesSH.filter(viaje => viaje.Nombre_Empresa == Nombre_Empresa))
        if (Nombre_Empresa == "") { setUpdate(!update) }
    };

    const handleFilter = (event) => {
        setNombre_Empresa(event.target.value);
    }


    useEffect(() => {
        const url = "http://localhost:3300/api/admin/readViajesSHAdmin"

        Fetch(url, "POST")
            .then(response => {
                if (response?.message) { alert(response.message) }
                if (response?.codigoResponse == "200") { setViajesSH(response.data) }
            })
        console.log(ViajesSH)
    }, [update])

    ///States and functinos of update ViajeSH
    const [formActive, setFormActive] = useState(false)
    const [idViajeSH, setID] = useState()
    const [formValues, setFromValues] = useState();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFromValues({ ...formValues, [name]: value });
    };

    const EditarViajeSH = async (_id) => {
        const url = "http://localhost:3300/api/admin/readViajesSHAdmin"
        let response = await Fetch(url, "POST", { _id })
        if (response?.message) { alert(response.message) }
        if (response?.data) {
            let data = response.data[0]
            setID(data._id)
            delete data._id
            setFromValues(data)
            setFormActive(true)
        }

    };

    const SaveEditarViajeSH = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3300/api/admin/updateViajeSH";
        const response = await Fetch(url, "PATCH", { _id: idViajeSH, ...formValues })
        console.log(response)
        if (response?.message) { alert(response.message) }
        if (response?.codigoResponse == "200") {
            setFormActive(!formActive)
            setUpdate(!update)
        }
    };


    const EliminarViajeSH = async (_id) => {
        const url = "http://localhost:3300/api/admin/removeViajeSH";
        const response = await Fetch(url, "DELETE", { _id });
        console.log(response);
        if (response?.message) { alert(response.message) }
        if (response?.codigoResponse == "200") { setUpdate(!update) }
    }

    let headViajeSH = <tr>
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
        <th>Editar</th>
        <th>Eliminar</th>
    </tr>


    return (
        <div className='container'>
            <form >
                <input onChange={handleFilter} type="text" placeholder='Buscar Empresa' className='form-control' />
                <button className="btn btn-primary" onClick={FilterEmpresa}>Filtrar</button>
            </form>
            <div className='row'>
                {(ViajesSH != []) ? <h1>Viajes SH</h1> : null}
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            {(ViajesSH != []) ? headViajeSH : null}
                        </thead>
                        <tbody id="data">
                            {
                                (ViajesSH != [])
                                    ? ViajesSH?.map(viaje => {
                                        return <ColumViajeSH
                                            key={viaje._id}
                                            Rol="conductor"
                                            EditarViajeSH={EditarViajeSH}
                                            EliminarViajeSH={EliminarViajeSH}
                                            {...viaje} />
                                    })
                                    : undefined
                            }
                        </tbody>
                    </table>

                </div>

            </div>

            <div>
                {
                    (formActive == true)
                        ? <div><hr /><h2> Editar viaje SH</h2></div>
                        : null
                }
                {
                    (formActive == true)
                        ? <FormPedirViajeSH handleChange={handleChange} SaveEditarViajeSH={SaveEditarViajeSH} {...formValues} />
                        : null}
            </div>
        </div>
    )
}
