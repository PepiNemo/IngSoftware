import { EditAttributes } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { FormImput, FormImput2 } from "./formImput";
import { json, useNavigate } from "react-router-dom";
import { object } from "prop-types";

function BorrarStake() {
  const [formValues, setFromValues] = useState({
    Nombre_Empresa: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/admin/removeStakeHolder";

    console.log(JSON.stringify(formValues));
    const options = {
      method: "DELETE",
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
        //navigate("/");
      }
    });
  };

  return (
    <div className="container">
      <FormImput2
        label="Nombre de la empresa"
        type="text"
        name="Nombre_Empresa"
        onChange={handleChange}
      />
      <button className="btn btn-danger" type="button" onClick={onSubmit}>
        Eliminar
      </button>
    </div>
  );
}

export default BorrarStake;
