import { useState, useEffect } from "react";

import { ColumConductor } from "../../components/ColumConductor";
import { FormCrearConductor } from "../../components/FormCrearConductor"

import { Fetch } from "../../services/Fetch"

export function VerConductores() {

  const [conductores, setConductores] = useState([])
  const [conductor, setConductor] = useState({})
  const [formActive, setFormActive] = useState(false)
  const [updateOrCreate, setUpdateCreate] = useState("")


  useEffect(() => {
    const readConductors = "http://localhost:3300/api/admin/readConductors";
    Fetch(readConductors, "GET")
      .then(response => {
        if (response?.message) { alert(response.message) }
        if (response?.codigoResponse == "200") { setConductores(response.data) }
      })
  }, [conductor]);

  const CreateConductor = async () => {
    setFormActive(true)
    setUpdateCreate("create")
  }

  const SaveCrearConductor = async (conductor) => {
    const createConductor = "http://localhost:3300/api/admin/CreateConductor" //POST
    console.log("save ", conductor)
    const response = await Fetch(createConductor, "POST", conductor)
    if (response?.message?.message){alert(response.message.message)}
    else if (response?.message[0]?.message) { alert(response.message[0].message) }
    else if (response?.message) { alert(response.message) }
    if(response?.codigoResponse == "201"){
      setConductor({})
      setFormActive(false)
    }
  
  }

  const EditarConductor = async (_id) => {
    const readConductor = "http://localhost:3300/api/admin/readConductor";
    let response = await Fetch(readConductor, "POST", { _id })
    if (response?.message) { alert(response.message) }
    if (response?.data) {
        let data = response.data[0]
        delete data.Password
        setConductor(data)
        setUpdateCreate("update")
        setFormActive(true)
    }
  }

  const SaveEditarConductor = async (_id, conductor) => {
    const updateConductor = "http://localhost:3300/api/admin/updateConductor";//PATCH
    console.log("Save editando : ",_id)
    const response = await Fetch(updateConductor, "PATCH", { 
      Id_Conductor: "_id",
      Id_Value: _id,
      ...conductor
    })
    if (response?.message) { alert(response.message) }
    console.log(conductor)
    setConductor({})
    setFormActive(false)

  }

  const DeshabilitarConductor = async (_id, Prioridad) => {
    const updateConductor = "http://localhost:3300/api/admin/updateConductor";//PATCH
    console.log("Deshabilitando : ",_id)
    const response = await Fetch(updateConductor, "PATCH", { 
      Id_Conductor: "_id",
      Id_Value: _id,
      Prioridad: Prioridad *-1
    })
    if (response?.message) { alert(response.message) }
    setConductor({})
  }

  const EliminarConductor = async (_id) => {
    const removeConductor = "http://localhost:3300/api/admin/removeConductor";//Delete
    const response = await Fetch(removeConductor, "DELETE", {"_id": _id})
    if (response?.message) { alert(response.message) }
    setConductor({})
  }


  return (
    <div>
      <div className="container">

        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Nombre Conductor</th>
                  <th>Username</th>
                  <th>Celular</th>
                  <th>Prioridad</th>
                  <th>Editar</th>
                  <th>Deshabilitar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody id="data">
                {
                  (conductores != [])
                    ? conductores.map(conductor => {
                      return <ColumConductor
                        key={conductor._id}
                        EditarConductor={EditarConductor}
                        DeshabilitarConductor={DeshabilitarConductor}
                        EliminarConductor={EliminarConductor}
                        {...conductor}
                      />
                    })
                    : null
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        {
          (formActive == false)
          ?<a className="btn btn-info" onClick={CreateConductor}>Crear un nuevo conductor</a>
          : null
        }

        {
          (formActive == true && updateOrCreate=="update")
            ? <div className="container"> 
              <h2> Editar Conductor</h2> <FormCrearConductor SaveEditarConductor={SaveEditarConductor} {...conductor} />  
              </div>
            : null
        }

        {
          (formActive == true && updateOrCreate=="create")
            ? <div className="container">
              <h2> Crear Conductor</h2> 
              <div> <FormCrearConductor SaveCrearConductor={SaveCrearConductor}/>  </div>
              </div>
            : null
        }

      </div>

      <div >
        
      </div>
    </div>
  );
}
