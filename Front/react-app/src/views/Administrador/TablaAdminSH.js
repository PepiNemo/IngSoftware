import { useState, useEffect } from "react";
import { Fetch } from "../../services/Fetch"

import { ColumStakeHolder } from "../../components/ColumStakeHolder"
import { FormCrearStakeHolder } from "../../components/FormCrearStakeHolder"



export function VerStakeHolder() {
    const [stakeHolders, setSHs] = useState([])
    const [formActive, setFormActive] = useState(false)
    const [stakeHolder, setSH] = useState({})
    const [updateOrCreate, setUpdateCreate] = useState("")

    useEffect(() => {
        const readStakeholders = "http://localhost:3300/api/admin/readStakeHolders"
        Fetch(readStakeholders, "GET")
            .then(response => {
                if (response?.message) { alert(response.message) }
                if (response?.codigoResponse == "200") { setSHs(response.data) }
                console.log(response.data)
            })

    }, [stakeHolder])

    const createStakeHolder = () => {
        setFormActive(true)
        setUpdateCreate("create")
    }

    const SaveCrearSH = async (stakeHolder) => {
        const createStakeholder = "http://localhost:3300/api/admin/createStakeHolder" //POST
        console.log("Save crear", stakeHolder)
        const response = await Fetch(createStakeholder, "POST", stakeHolder)
        if (response?.message?.message){alert(response.message.message)}
        else if (response?.message[0]?.message) { alert(response.message[0].message) }
        else if (response?.message) { alert(response.message) }
        if(response?.codigoResponse == "201"){
          setSH({})
          setFormActive(false)
        }
    }

    const EditarSH = async (_id) => {
        const readStakeHolder = "http://localhost:3300/api/admin/readStakeHolder";
        let response = await Fetch(readStakeHolder, "POST", {"_id":_id})
        
        if (response?.data) {
            delete response.data.Password
            setSH(response.data)
            setUpdateCreate("update")
            setFormActive(true)
        }
        console.log("Read SH", stakeHolder)
    }

    const SaveEditarSH = async (_id, stakeHolder) => {
        const updateStakeHolder = "http://localhost:3300/api/admin/updateStakeHolder";//PATCH
        console.log("Save editando : ",_id)
        const response = await Fetch(updateStakeHolder, "PATCH", { 
          Id_StakeHolder: "_id",
          Id_Value: _id,
          ...stakeHolder
        })
        if (response?.message) { alert(response.message) }
        setSH({})
        setFormActive(false)
    }

    const EliminarSH = async (_id) => {
        const removeStakeHolder = "http://localhost:3300/api/admin/removeStakeHolder";//Delete
        const response = await Fetch(removeStakeHolder, "DELETE", {"_id": _id})
        if (response?.message) { alert(response.message) }
        if(response?.codigoResponse == "200"){setSH({})}
      }

    return <>
        <div className="container">
            <table className="table">
                <thead className="table-primary">
                    <tr>
                        <th>Nombre Empresa</th>
                        <th>Rut Empresa </th>
                        <th>Correo </th>
                        <th>Numero contacto</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody id="data">
                    {
                        (stakeHolders != [])
                            ? stakeHolders.map(stakeholder => {
                                return <ColumStakeHolder
                                    key={stakeholder._id}
                                    EditarSH={EditarSH}
                                    EliminarSH={EliminarSH}
                                    {...stakeholder}
                                />
                            })
                            : null
                    }
                </tbody>
            </table>

        </div>
        {
            (formActive == false)
                ? <a className="btn btn-info" onClick={createStakeHolder}>Crear un nuevo StakeHolder</a>
                : null
        }

        {
          (formActive == true && updateOrCreate=="create")
            ? <div className="container">
                <h2> Crear StakeHolder</h2> 
                <FormCrearStakeHolder SaveCrearSH={SaveCrearSH}/>
              </div>
            : null
        }
        {
          (formActive == true && updateOrCreate=="update")
            ? <div className="container"> 
              <h2> Editar StakeHolder</h2> <FormCrearStakeHolder SaveEditarSH={SaveEditarSH} {...stakeHolder} />  
              </div>
            : null
        }
    </>
}