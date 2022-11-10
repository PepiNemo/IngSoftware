import React, { useState } from "react";
import { FormImput, FormImput2 } from "./formImput";
//import { FormImput2 } from "./formImput2";
import { Foter } from "./Foter";


function Formulario2() {
  const [formValues, setFromValues] = useState({
    nombre_del_pasajero: "",
    direccionOrigen: "",
    direccionDestino: "",
    contacto: "",
    fecha: "",
    Hinicio: "",
    tamaño: "Pequeña",
    n_pasajeros: "1",
    n_maletas: "",
  });
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formValues));
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };
  
  const changeFunc = () => {
    var selectBox = document.getElementById("tamaño");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setFromValues({ ...formValues, [formValues.tamaño]: selectedValue });
  };
  
  const changeFunc2 = () => {
    var selectBox = document.getElementById("tamaño");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setFromValues({ ...formValues, [formValues.n_pasajeros]: selectedValue });
  };

  return (
    <div className="basty">
      <div className="container">
        <span className="title"> Formulario General</span>
        <form className="row g-3">
          <FormImput label="Email" type="email" name="email" />

          <FormImput
            label="Nombre del pasajero"
            type="text"
            name="nombre_del_pasajero"
            onChange={handleChange}
          />

          <FormImput2
            label="Direccionn de Origen"
            type="text"
            name="direccionOrigen"
            onChange={handleChange}
          />

          <FormImput2
            label="Direcion destino"
            type="text"
            name="direccionDestino"
            onChange={handleChange}
          />

          <FormImput2
            label="Telefono de contacto"
            type="text"
            name="contacto"
            onChange={handleChange}
          />

          <FormImput
            label="Fecha"
            type="text"
            name="fecha"
            onChange={handleChange}
          />

          <FormImput
            label="Hora inicio"
            type="text"
            name="Hinicio"
            onChange={handleChange}
          />

          <FormImput2
            label="Numero de Maletas"
            type="text"
            name="n_maletas"
            onChange={handleChange}
          />

          <div className="col-md-6">
            <label
              for="n_pasajeros"
              htmlFor="inputState"
              className="form-label"
            >
              Pasajero/s
            </label>
            <select
              id="n_pasajeros"
              className="form-select"
              onChange={changeFunc}
            >
              <option selected=""></option>
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
            </select>
          </div>

          <div className="col-md-6">
            <label for="tamaño" htmlFor="inputState" className="form-label">
              Tamaño de Maletas
            </label>
            <select id="tamaño" className="form-select" onChange={changeFunc}>
              <option selected=""></option>
              <option value="Pequeña"> Pequeña </option>
              <option value="Mediana"> Mediana </option>
              <option value="Grande"> Grande </option>
            </select>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" onClick={onSubmit}>
              Enviar
            </button>
          </div>
        </form>
      </div>

      <Foter />
    </div>
  );
}
export default Formulario2;
