import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { FormImput } from "./components/formImput.js"

function Formulario() {
  //const navigate = useNavigate();


  const [formValues, setFormValues] = useState({
    name: "",
    number: "",
    email: "",
    dire_inicio: "",
    dire_destino: "",
    hora: "",
    fecha: "",
    metodo_pago: "Transferencia"
  })

 
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formValues))

    /* const url = "http://localhost:3300/api/TakeViaje";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
      credentials: 'include'
    };
    fetch(url, options)
      .then((response) => {
        if (response.status === 201) {
          alert("Viaje Agendado");
          navigate("/");
        } else {
          alert("Error en el formulario");
        }
      })
      .catch((e) => console.log(e)); */
  };

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormValues({...formValues, [name]:value})
}

  const changeFunc = () => {
    var selectBox = document.getElementById("pago");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    setFormValues({...formValues, [formValues.metodo_pago]:selectedValue})
  };

  return (
    <div className="prueba">
      <h1>Formulario</h1>
      <form action="">
        <FormImput
            label="Nombre: "  
            type="text"
            name="name"
            onChange={handleChange}
        />

        <FormImput
            label="Direccion Origen: "
            name="dire_inicio"
            onChange={handleChange}
        />

        <FormImput
            label="Direccion Destino: "
            name="dire_destino"
            onChange={handleChange}
        />

        <FormImput
            label="Hora de inicio: "
            name="hora"
            onChange={handleChange}
        />

        <FormImput
          label="Fecha para agendar"
          type="date"
          name="fecha"
          onChange={handleChange}
        />

        <div>
          <label for="pago">Seleccione metodo de pago: </label>
          <select id="pago"  onChange={changeFunc}>
            <option value="Transferencia">Transferencia</option>
            <option  value="Efectivo">Efectivo</option>
          </select>
        </div>

        <FormImput
          label="Email de contacto: "
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />

        <FormImput
          label="Numero de contacto:"
          type="text"
          placeholder="569 1234 8765"
          name="number"
          onChange={handleChange}
        />

        <button onClick={onSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
