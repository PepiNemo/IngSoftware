import React, { useState } from "react";
import { FormImput, FormImput2 } from "./formImput";
import { useNavigate } from "react-router-dom";

function ViajeStake() {
  const navigate = useNavigate();
  const [formValues, setFromValues] = useState({
    Id_SH: "3",
    Direccion_Origen1: "",
    Direccion_Destino1: "",
    Fecha_Hora_Inicio: "",
    Fecha_Hora_Termino: "",
    Nombre_Empresa: "",
    Nombre_StakeHolder: "",
    Nombre_Pasajero_Representante: "",
    Celular_Pasajero_Representante: "",
    Numero_Pasajeros: "",
    Numero_Maletas: "",
    Tamaño_Equipaje: "Pequeña",
    Detalles_Extras: "",
    Estado_Viaje: "Solicitado",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/stakeHolder/createViajeSH";
    console.log(JSON.stringify(formValues));

    const options = {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formValues),
    };

    fetch(url, options).then((response) => {
      if (!response.ok) {
        alert("Codigo de error desde el servidor");
        response.json().then((json) => alert(json.message));
      } else {
        response.json().then((json) => alert(json.message));
        navigate("/");
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };

  const changeFunc = () => {
    var selectBox = document.getElementById("tamaño");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setFromValues({ ...formValues, [formValues.t_equi]: selectedValue });
  };

  return (
    <div className="basty">
      <div className="container">
        <span className="title">Pedir Viaje</span>
        <from className="row g-3">
          <FormImput2
            label="Nombre Empresa"
            type="text"
            name="Nombre_Empresa"
            onChange={handleChange}
          />

          <FormImput2
            label="Nombre Stake Holder"
            type="text"
            name="Nombre_StakeHolder"
            onChange={handleChange}
          />

          <FormImput2
            label="Nombre del Representante"
            type="text"
            name="Nombre_Pasajero_Representante"
            onChange={handleChange}
          />

          <FormImput2
            label="Contacto"
            type="text"
            name="Celular_Pasajero_Representante"
            onChange={handleChange}
          />

          <FormImput
            label="Direccion Origen"
            type="text"
            name="Direccion_Origen1"
            onChange={handleChange}
          />

          <FormImput
            label="Direccion Destino"
            type="text"
            name="Direccion_Destino1"
            onChange={handleChange}
          />

          <FormImput
            label="Hora Inicio"
            type="text"
            name="Fecha_Hora_Inicio"
            onChange={handleChange}
          />

          <FormImput
            label="Hore Termino"
            type="text"
            name="Fecha_Hora_Termino"
            onChange={handleChange}
          />

          <FormImput
            label="Numero de maletas"
            type="text"
            name="Numero_Maletas"
            onChange={handleChange}
          />

          <FormImput
            label="Numero de Pasajeros"
            type="text"
            name="Numero_Pasajeros"
            onChange={handleChange}
          />

          <div className="col-12">
            <label
              for="Tamaño_Equipaje"
              htmlFor="inputState"
              className="form-label"
            >
              Tamaño de maletas
            </label>
            <select
              id="Tamaño_Equipaje"
              className="form-select"
              onChange={changeFunc}
            >
              <option value="Pequeña"> Pequeña </option>
              <option value="Mediana"> Mediana </option>
              <option value="Grande"> Grande </option>
            </select>
          </div>

          <input
            type="text"
            class="form-control"
            placeholder="Campo de texto"
          ></input>

          <div className="col-12">
            <button className="btn btn-primary" onClick={onSubmit}>
              Enviar
            </button>
          </div>
        </from>
      </div>
    </div>
  );
}

export default ViajeStake;
