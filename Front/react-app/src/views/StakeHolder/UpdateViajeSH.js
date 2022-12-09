import { useState } from "react";
import { FormImput2 } from "../../components/formImput";

export function UpdateViajeSH() {
  const [formValues, setFromValues] = useState({
    Id_ViajeSH: "Direccion_Origen1",
    Id_Value: "",
    Fecha_Hora_Inicio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/stakeHolder/updateViajeSH";

    console.log(JSON.stringify(formValues));
    const options = {
      method: "PATCH",
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
        label="Indique la direccion origen del viaje"
        type="text"
        name="Id_Value"
        onChange={handleChange}
      />

      <FormImput2
        label="Indique el cambio de hora"
        type="text"
        name="Fecha_Hora_Inicio"
        onChange={handleChange}
      />

      <button className="btn btn-danger" type="button" onClick={onSubmit}>
        Cambiar
      </button>
    </div>
  );
}