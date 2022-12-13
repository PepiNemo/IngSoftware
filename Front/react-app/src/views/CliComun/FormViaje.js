import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'


import { FormImput, FormImput2, FormImputSeleccion } from "../../components/formImput";
import { Foter } from "../../components/Foter";
import { Fetch } from "../../services/Fetch"


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
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/pasajero/createViaje"

    const {codigoResponse, message } = await Fetch(url, "POST", formValues);
    alert(message);

    if(codigoResponse == "201"){navigate("/")}

  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
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
            label="Telefono de contacto"
            type="text"
            name="Celular"
            onChange={handleChange}
          />

          <FormImput
            label="Email" 
            type="email" 
            name="Correo" 
            onChange={handleChange} 
            />

          <FormImputSeleccion
            label="Numero de Pasajeros"
            id="Numero_Pasajeros"
            name="Numero_Pasajeros"
            value={formValues.Numero_Pasajeros}
            onChange={handleChange}
            options={[1,2,3,4]}
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
            label="Hora de inicio"
            type="text"
            name="Hora_Inicio"
            onChange={handleChange}
          />

          <FormImput
            label="Fecha del Viaje"
            type="text"
            name="Fecha"
            onChange={handleChange}
          />


          <FormImput
            label="Numero de Maletas"
            type="text"
            name="Numero_Maletas"
            onChange={handleChange}
          />




          <FormImputSeleccion
            label="Tamaño de las Maletas"
            id="Tamaño_Maletas" 
            name="Tamaño_Maletas"
            value={formValues.Tamaño_Maletas}
            onChange={handleChange}
            options={["Pequeña", "Mediana", "Grande"]}
          />



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
