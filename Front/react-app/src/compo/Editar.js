import { EditAttributes } from "@mui/icons-material";
import React, { useState } from "react";
import { FormImput, FormImput2 } from "./formImput";

function Edit() {
  const [formValues, setFromValues] = useState({
    nombre: "",
    rut: "",
    contacto: "",
    username: "",
    password: ""
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formValues));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
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
              <span className="font-weight-bold">StakeHolder1</span>
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
                <h4 className="text-right">Editar Perfil</h4>
              </div>
              <div className="row mt-2">
                <FormImput2
                  label="Nombre Empresa"
                  type="text"
                  name="nombre"
                  placeholder="nombre"
                  onChange={handleChange}
                />
              </div>
              <div className="row mt-3">
                <FormImput2
                  label="Rut"
                  type="text"
                  name="rut"
                  onChange={handleChange}
                  placeholder="Ingrese Rut"
                />

                <FormImput2
                  label="Numero de contacto"
                  type="text"
                  name="contacto"
                  onChange={handleChange}
                  placeholder="Ingrese numero de contacto"
                />

                <FormImput2
                  label="Nombre de Usuario"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Nombre de usuario"
                />

              </div>

              <FormImput2
                label="Email"
                type="email"
                name="correo"
                onChange={handleChange}
                placeholder=""
              />

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
export default Edit;
