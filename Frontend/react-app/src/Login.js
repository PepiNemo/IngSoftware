import './style.css'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

export var token  = ""
const setToken = (newToken) => {
  token = newToken
}

function Login() {

    const navigate = useNavigate()
  
    const[formValues, setFormValues] = useState({
      "username": '',
      "password": ''
    })
  
    const handleChange = (event) => {
      const {name, value} = event.target
      setFormValues({...formValues, [name]: value})
    } 

  
    const onSubmit = (event)=> {
      event.preventDefault()

      const url = "http://localhost:3300/api/login"

      const options = {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formValues)
      }

      fetch(url, options)
        .then(response => {
          if(!response.ok){
            response.json().then(json => alert(json.message))
          }else{
            alert("Has iniciado sesion")
            navigate("/")
          }
        })  
    }
  
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <title> Ingreso</title>
        <div className="container">
          <div className="forms">
            <div className="form login">
              <span className="title">Ingreso</span>
              <form onSubmit={onSubmit}>
                <div className="input-field">
                  <input type="text" placeholder="Ingresa tu email" name="username" required="" onChange ={handleChange} />
                  <i className="uil uil-envelope icon" />
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Ingresa tu contrasena"
                    required=""
                    onChange ={handleChange}
                  />
                  <i className="uil uil-lock icon" />
                </div>
                <div className="checkbox-text">
                  <div className="checkbox-content">
                    <input type="checkbox" id="logCheck" />
                    <label htmlFor="logCheck">Recordarme</label>
                  </div>
                  <a href="" className="text">
                    Olvido contrasena?
                  </a>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login