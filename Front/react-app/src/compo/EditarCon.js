import { EditAttributes } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { FormImput, FormImput2 } from "./formImput";
import { json, useNavigate } from "react-router-dom";
import { object } from "prop-types";

function Edit2() {
  const navigate = useNavigate();
  const [formValues, setFromValues] = useState({
    Nombre: "",
    Rut: "",
    Celular: "",
    Correo: "",
    Username: "",
  });

  const [Password, setPassword]= useState()


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };


  const handleChange2 = (event) => {
    const { name, value } = event.target;
    setPassword({ [name]: value });
  };


  const url = "http://localhost:3300/api/conductor/readConductor";

  useEffect(() => {
    const options = {
      method: "GET",
      credentials: "include",
      headers: { "Content-type": "application/json" },
    };

    fetch(url, options).then((response) => {
      if (!response.ok) {
        response.json().then((json) => console.log(json));
      } else {
        response.json().then((json) => {
          console.log(json[0]);
          setFromValues({ Nombre:json[0].Nombre, Rut: json[0].Rut, Celular:json[0].Celular, Correo:json[0].Correo, Username:json[0].Username });
        });
      }
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const url = "http://localhost:3300/api/conductor/updateConductor";
    const union = Object.assign(formValues, Password)
    console.log(JSON.stringify(union));
    const options = {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(union),
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((json) => alert(json.message))
      .then(navigate("/"));
  };

  return (
    <div className="Vodka">
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">Conductor</span>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={onSubmit}
                >
                  Cambiar contrasena
                </button>
              </div>

              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Editar Perfil de Conductor</h4>
              </div>
              <div className="row mt-2">
                <FormImput2
                  label="Nombre Conductor"
                  type="text"
                  name="Nombre"
                  placeholder=""
                  onChange={handleChange}
                  value={formValues.Nombre}
                />
              </div>
              <div className="row mt-3">
                <FormImput2
                  label="Rut"
                  type="text"
                  name="Rut"
                  onChange={handleChange}
                  placeholder=""
                  value={formValues.Rut}
                />

                <FormImput2
                  label="Numero de contacto"
                  type="text"
                  name="Celular"
                  onChange={handleChange}
                  placeholder=""
                  value={formValues.Celular}
                />

                <FormImput2
                  label="Nombre de Usuario"
                  type="text"
                  name="Username"
                  onChange={handleChange}
                  placeholder=""
                  value={formValues.Username}
                />
                <FormImput2
                  label="Contraseña"
                  type="password"
                  name="Password"
                  onChange={handleChange2}
                />
              </div>

              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={onSubmit}
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Edit2;
