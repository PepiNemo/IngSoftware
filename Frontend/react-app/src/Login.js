import './style.css'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
  
    const[formValues, setFormValues] = useState({
      "username": '',
      "password": ''
    })
  
    const handleChange = (event) => {
      const {name, value} = event.target
      setFormValues({...formValues, [name]: value})
      console.log(name, value)
    } 
  
    const onSubmit = (event)=> {
      event.preventDefault()
  
  
      const url = "http://localhost:3300/api/login"
      const jeuy = JSON.stringify(formValues)
      console.log(jeuy)
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        },
        body: jeuy
      }
      fetch(url, options)
        .then(response => {
          console.log(response.status, "Holo")
          if(response.status === 200){
            navigate("/")
          }else{
            alert('Usuario y/o contraseña incorrecto')
          }
        })
        .catch(e => console.log(e))
  
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