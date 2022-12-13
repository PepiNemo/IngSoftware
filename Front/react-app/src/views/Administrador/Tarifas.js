import { useEffect, useState } from "react";

import { FormImput2 } from "../../components/formImput";
import { ColumnaTarifa } from "../../components/columTarifa"
import { Fetch } from "../../services/Fetch"

export function Tarifas() {
  const [formValues, setFromValues] = useState({
    Lugar: "",
    Precio: "",
  });

  const [tarifas, setTarifas] = useState([])
  const [idTarifaUpdate, setID] = useState({ _id: "" })


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };


  const CreateTarifa = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/tarifa/createTarifa";

    const response = await Fetch(url, "POST", formValues)
    alert(response?.message)

    if (response?.codigoResponse == "201") { setFromValues({ Lugar: "", Precio: "" }) }
  };

  const updateTarifa = (props) => {
    setID({ _id: props._id })
    setFromValues({ Lugar: props.Lugar, Precio: props.Precio })
  }

  const SaveUpdate = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/tarifa/updateTarifa"
    const { codigoResponse, message } = await Fetch(url, "PATCH", { ...idTarifaUpdate, ...formValues })
    alert(message)

    if (codigoResponse == "200") {
      setID({_id: ""})
      setFromValues({
        Lugar: "",
        Precio: "",
      })
    }
  }


  const EliminarTarifa = async (props) => {
    const url = "http://localhost:3300/api/tarifa/deleteTarifa";
    const response = await Fetch(url, "DELETE", { _id: props._id })
    alert(response?.message)

    if (response?.codigoResponse == "200") {
      setFromValues({
        Lugar: "",
        Precio: "",
      })
    }
  }


  useEffect(() => {
    const url = "http://localhost:3300/api/tarifa/readTarifa";
    Fetch(url, "GET").then(response => {
      if (response.codigoResponse == "200") {
        setTarifas(response.data)
      }
    })
  }, [formValues])


  let head = <tr>
    <th>Lugar</th>
    <th>Precio</th>
    <th>Editar</th>
    <th>Eliminar</th>
  </tr>

  return (
    <div className="container">
      <div>
        <FormImput2
          label="Lugar destino"
          type="text"
          name="Lugar"
          value={formValues.Lugar}
          onChange={handleChange}
          placeholder=""
        />

        <FormImput2
          label="Precio"
          type="text"
          name="Precio"
          value={formValues.Precio}
          onChange={handleChange}
          placeholder=""
        />

        {
          (idTarifaUpdate._id != "")
            ? <button className="btn btn-danger" type="button" onClick={SaveUpdate}> Actualizar Tarifa</button>
            : <button className="btn btn-danger" type="button" onClick={CreateTarifa}> Crear Tarifa</button>
        }

      </div>

      <div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                {(tarifas != [])? head: null}
              </thead>

              <tbody>
                {
                  (tarifas != [])
                    ? tarifas.map(tarifa => <ColumnaTarifa
                      key={tarifa._id}
                      Editar={updateTarifa}
                      Eliminar={EliminarTarifa}
                      {...tarifa} />)
                    : null
                }

              </tbody>

            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

