import { ClassNames } from "@emotion/react";
import { ForkRight } from "@mui/icons-material";
import React, { useState } from "react";
import { FormImput, FormImput2 } from "./formImput.js";
import { useNavigate } from 'react-router-dom'
//import "./App.css";

function AgregarStake() {
  const navigate = useNavigate()
  const [formValues, setFromValues] = useState({
    Nombre_Empresa: "",
    Rut_Empresa: "",
    Correo: "",
    Numero_Contacto: "",
    Username: "",
    Password: "",
    Imagen_URL: "www.google.com"
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/admin/createStakeHolder"

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
          response.json().then(json => alert(json.message))
        } else {
          alert("Has registrado al conductor satisfactoriamente")
          navigate("/")
        }
    })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };


  return (
    <div ClassNames="basty">
      <div className="container">
        <span className="title">Crear StakeHolder</span>

        <form className="row g-3" action="">
          <FormImput
            label="Nombre empresa"
            type="text"
            name="Nombre_Empresa"
            onChange={handleChange}
          />

          <FormImput
            label="Rut Empresa"
            type="text"
            name="Rut_Empresa"
            onChange={handleChange}
            className="form-control"
          />

          <FormImput
            htmlFor="inputCorreo4"
            ClassNames=""
            label="Correo electronico"
            type="Correo"
            name="Correo"
            onChange={handleChange}
          />

          <FormImput
            label="Numero de Contacto"
            type="text"
            name="Numero_Contacto"
            onChange={handleChange}
          />

          <FormImput
            label="Username"
            type="text"
            name="Username"
            onChange={handleChange}
          />

          <FormImput
            label="Password"
            type="Password"
            name="Password"
            onChange={handleChange}
          />
          <div className="col-12">
            <button className="btn-primary" onClick={onSubmit}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AgregarStake;
