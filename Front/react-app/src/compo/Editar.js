import { EditAttributes } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";
import { FormImput, FormImput2 } from "./formImput";

function Edit() {
  const navigate = useNavigate();
  const [formValues, setFromValues] = useState({
    Nombre_Empresa: "",
    Rut_Empresa: "",
    Correo: "",
    Username: "",
    Numero_Contacto: "",
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

  const url = "http://localhost:3300/api/stakeHolder/readStakeHolder";
  //const url = "http://jsonplaceholder.typicode.com/users";

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
          console.log(json);
          setFromValues({ Nombre_Empresa: json.Nombre_Empresa, Rut_Empresa: json.Rut_Empresa,  Correo: json.Correo, Username: json.Username, Numero_Contacto:json.Numero_Contacto});
        });
      }
    });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const url = "http://localhost:3300/api/stakeHolder/updateStakeHolder";

    const union = Object.assign(formValues, Password)
    console.log(JSON.stringify(union));
    const options = {
      method: "PATCH",
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
              <span className="font-weight-bold"></span>
              <div className="mt-5 text-center"></div>

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
                  label="Nombre de la Empresa"
                  type="text"
                  name="Nombre_Empresa"
                  placeholder="Nombre_Empresa"
                  onChange={handleChange}
                  value={formValues.Nombre_Empresa}
                />
              </div>
              <div className="row mt-3">
                <FormImput2
                  label="Nombre de Usuario"
                  type="text"
                  name="username"
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

                <FormImput2
                  label="Rut_Empresa"
                  type="text"
                  name="Rut_Empresa"
                  onChange={handleChange}
                  placeholder=""
                  value={formValues.Rut_Empresa}
                />

                <FormImput2
                  label="Numero de Correo"
                  type="text"
                  name="Correo"
                  onChange={handleChange}
                  placeholder="Ingrese numero de Correo"
                  value={formValues.Correo}
                />

                <FormImput2
                  label="Numero de Contacto"
                  type="text"
                  name="Numero_Contacto"
                  onChange={handleChange}
                  placeholder=""
                  value={formValues.Numero_Contacto}
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
export default Edit;
