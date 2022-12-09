import React, { useState } from "react";
import { FormImput } from "../../components/formImput";
//import { FormImput } from "./FormImput";
import { Foter } from "../../components/Foter";
import { useNavigate } from 'react-router-dom'


function FormViaje() {
  const navigate = useNavigate()
  const [formValues, setFromValues] = useState({
    Nombre_Pasajero: "",
    Dire_Inicio: "",
    Dire_Destino: "",
    Celular: "",
    Correo: "",
    Fecha: "",  
    Hora_Inicio: "",
    Tamaño_Maletas: "Mediana",
    Numero_Pasajeros: "1",
    Numero_Maletas: "",
    Estado_Viaje: "Solicitado"
  });
  
  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/pasajero/createViaje"

    console.log(JSON.stringify(formValues))
    const options = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formValues)
    }

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          alert("Codigo de error desde el servidor")
          response.json().then(json => {
            if(json?.message){
              alert(json.message)
            }

            alert(json.error.message)
          })
        }
        else {

          response.json().then(json => alert(json.message));
          navigate("/")
        }
    })
    .catch(e => {
      alert("Error")
      console.log(e)
    })
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };
  
  const changeFunc = () => {
    var selectBox = document.getElementById("Tamaño_Maletas");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setFromValues({ ...formValues, Tamaño_Maletas: selectedValue });
  };
  
  const changeFunc2 = () => {
    var selectBox = document.getElementById("Numero_Pasajeros");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setFromValues({ ...formValues, Numero_Pasajeros: selectedValue });
  };

  return (
    <div className="basty">
      <div className="container">
        <span className="title"> Formulario General</span>
        <form className="row g-3">

          

          <FormImput
            label="Nombre del pasajero"
            type="text"
            name="Nombre_Pasajero"
            onChange={handleChange}
          />

          <FormImput 
            label="Email" 
            type="email" 
            name="Correo" 
            onChange={handleChange} 
            />

          <FormImput
            label="Direccion de Origen"
            type="text"
            name="Dire_Inicio"
            onChange={handleChange}
          />

          <FormImput
            label="Direccion de Destino"
            type="text"
            name="Dire_Destino"
            onChange={handleChange}
          />

          <FormImput
            label="Telefono de contacto"
            type="text"
            name="Celular"
            onChange={handleChange}
          />

          <FormImput
            label="Fecha del Viaje"
            type="text"
            name="Fecha"
            onChange={handleChange}
          />

          <FormImput
            label="Hora de inicio"
            type="text"
            name="Hora_Inicio"
            onChange={handleChange}
          />

          <FormImput
            label="Numero de Maletas"
            type="text"
            name="Numero_Maletas"
            onChange={handleChange}
          />

          <div className="col-md-6">
            <label
              for="Numero de Pasajeros"
              htmlFor="inputState"
              className="form-label"
            >
              Numero de Pasajeros
            </label>
            <select
              id="Numero_Pasajeros"
              className="form-select"
              onChange={changeFunc2}
            >
              <option value="0"> 0 </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
            </select>
          </div>

          <div className="col-md-6">
            <label for="Tamaño_Maletas" htmlFor="inputState" className="form-label">
              Tamaño de las Maletas
            </label>
            <select id="Tamaño_Maletas" className="form-select" defaultValue={"Mediana"} onChange={changeFunc}>
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
export default FormViaje;
