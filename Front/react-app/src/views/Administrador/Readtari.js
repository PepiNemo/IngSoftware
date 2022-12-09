import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormImput2 } from "../../components/formImput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//const url = "http://jsonplaceholder.typicode.com/users"

export function Readtari() {
  useEffect(() => {
    const url = "http://localhost:3300/api/tarifa/readTarifa";
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
      tbody += `<tr><td>${data[i].Lugar}</td><td>${data[i].Precio}</td></tr>`;
    }
    document.getElementById("data").innerHTML = tbody;
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Lugar</th>
                  <th>Precio</th>
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
