import  { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Suscription} from "../Suscription/main.js"

import { RolContext } from "../context/rolContext"


export function Sesion() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    Username: "",
    Password: "",
  });
  
  const {rol, setRol} = useContext(RolContext)

  useEffect(()=> {
    console.log("Nuevo Rol", rol)
  },[rol])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const onSubmit = async (event) =>{
    event.preventDefault();

    const url = "http://localhost:3300/api/login";

    console.log(JSON.stringify(formValues));
    const options = {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formValues),
    };

    await fetch(url, options).then( (response) => {
      if (!response.ok) {
        response.json().then((json) => alert(json.message));
      } else {
        response.json().then(async (json) => {
          await setRol(json.Rol)
          alert(json.message);
          if(json.Rol == "conductor" || json.Rol=="admin"){
            await Suscription()
          }
          //setRol((state) => {console.log(state);navigate("/");return state})   
          navigate("/")
        })

      }
    });
  };

  return (
    <div className="Sessionn">
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width+device-width ,initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <link rel="stylesheet " href="style.css" />
        <title> Ingreso</title>
        <div className="container">
          <div className="forms">
            <div className="form login">
              <span className="title">Ingreso</span>
              <form onSubmit={onSubmit}>
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Ingresa tu email"
                    required=""
                    name="Username"
                    onChange={handleChange}
                  />
                  <i className="uil uil-envelope icon" />
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    name="Password"
                    placeholder="Ingresa tu contrasena"
                    required=""
                    onChange={handleChange}
                  />
                  <i className="uil uil-lock icon" />
                </div>
                <div className="checkbox-text">
                  <div className="checkbox-content">
                    <input type="checkbox" id="logCheck" />
                    <label htmlFor="logCheck">Recordarme</label>
                  </div>
                  <a href="#" className="text">
                    Olvido contrasena?
                  </a>
                </div>
                <div className="input-field button">
                  <button type="submit">Enviar</button>
                </div>
              </form>
              <h1></h1>
            </div>
          </div>
        </div>
      </>

      <div className="chao">
        <div className="footer">
          <>
            <meta charSet="UTF-8" />
            <title>Pie de pagina</title>
            <meta
              name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            />
            <link rel="stylesheet" href="basty.css" />
            {/*Iconos*/}
          </>
          <footer className="pie-pagina">
            <div className="grupo-1">
              <div className="box">
                <figure>
                  <a href="#">
                    <img src="./TRANSPORTE.png" />
                  </a>
                </figure>
              </div>
              <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>
                  Bienvenidos a trasportes Jcu somos una empresa dedicada al
                  transporte privado y particular.
                </p>

                <p>Contactanos al +56990201831</p>
              </div>
              <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                  <a href="#" className="fa fa-facebook" />
                  <a
                    href="https://www.instagram.com/_nxred._/"
                    className="fa fa-instagram"
                  />
                  <a href="#" className="fa fa-twitter" />
                  <a href="#" className="fa fa-youtube" />
                </div>
              </div>
            </div>
            <div className="grupo-2">
              <small>
                © 2022 <b>JCU</b> - Todos los Derechos Reservados.
              </small>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

