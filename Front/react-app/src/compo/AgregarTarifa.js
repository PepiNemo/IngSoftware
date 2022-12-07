import { RestaurantMenu } from "@mui/icons-material";
import { react, useState } from "react";
import { FormImput2 } from "./formImput";

function AgregarTarifa() {
  const [formValues, setFromValues] = useState({
    Lugar: "",
    Precio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3300/api/tarifa/createTarifa";

    console.log(JSON.stringify(formValues));
    const options = {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formValues),
    };

    fetch(url, options).then((response) => {
      if (!response.ok) {
        alert("Codigo de error desde el servidor");

        response.json().then((json) => {
          console.log(json);
          alert(json.message);
        });
      } else {
        response.json().then((json) => alert(json.message));
        //navigate("/");
      }
    });
  };

  return (
    <div className="container">
      <FormImput2
        label="Lugar destino"
        type="text"
        name="Lugar"
        onChange={handleChange}
        placeholder=""
      />

      <FormImput2
        label="Precio"
        type="text"
        name="Precio"
        onChange={handleChange}
        placeholder=""
      />

      <button className="btn btn-danger" type="button" onClick={onSubmit}>
        Agregar Tarifa
      </button>
    </div>
  );
}

export default AgregarTarifa;
