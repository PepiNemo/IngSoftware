import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormImput2 } from "./formImput";
import CrearConductor from "./CrearConductor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const url = "http://localhost:3300/api/admin/readConductors";
//const url = "http://jsonplaceholder.typicode.com/users"

export default function VerConductores() {
  useEffect(() => {
    const options = {
      method: "GET",
      credentials: "include",
      headers: { "Content-type": "application/json" },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => mostrarData(data))
      .catch((error) => console.log(error));
  }, []);

  const mostrarData = (data) => {
    console.log(data);
    let tbody = "";
    for (let i = 0; i < data.length; i++) {
      tbody += `<tr><td>${data[i].Nombre}</td><td>${data[i].Username}</td><td>${data[i].Celular}</td><td>${data[i].Prioridad}</td></tr>`;
    }
    document.getElementById("data").innerHTML = tbody;
  };

  // seba
  const [formValues, setFromValues] = useState({
    Username: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/admin/removeConductor";

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

  const [formValues2, setFromValues2] = useState({
    Id_Conductor: "Username",
    Id_Value: "",
    Prioridad: "",
  });

  const onSubmit2 = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/admin/updateConductor";

    console.log(JSON.stringify(formValues2));
    const options = {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formValues2),
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

  const handleChange2 = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFromValues2({ ...formValues2, [name]: value });
  };

  return (
    <div>
      <div className="container">
        
        <div className="container">
          <FormImput2
            label="Nombre de usuario del conductor a eliminar"
            type="text"
            name="Username"
            onChange={handleChange}
          />
          <button className="btn btn-danger" type="button" onClick={onSubmit}>
            Eliminar
          </button>
        </div>

        <div className="container">
          <FormImput2
            label="Ingrese el Nombre de Usuario del Conductor"
            type="text"
            name="Id_Value"
            onChange={handleChange2}
          />

          <FormImput2
            label="Ingrese la prioridad negativa para deshabilitar conductor"
            type="text"
            name="Prioridad"
            onChange={handleChange2}
          />

          <button className="btn btn-secondary" type="button" onClick={onSubmit2}>
            Cambiar Prioridad
          </button>
        </div>

        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Nombre Conductor</th>
                  <th>Username</th>
                  <th>Celular</th>
                  <th>Prioridad</th>
                </tr>
              </thead>
              <tbody id="data"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
