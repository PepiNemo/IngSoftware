import React, {useState} from "react";
import { useNavigate} from 'react-router-dom'
import "./stake.css"


function Holder(){

    const navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        name: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]:value})
    }

    const onSubmit = (event)=> {
        event.preventDefault()

        const url = "http://localhost:3300/api/admin/registerStakeHolder"
        const options = {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(formValues)
        }

        fetch(url, options)
          .then(response => {          
            if(response.status == 201){
              alert("Stake Holder registrado correctamente")
              navigate("/")
            }else if(response.status == 403){
              alert("Debes ser Administrador para crear un Stake Holder")
            }
            else{
              const a = response.json().then(json => alert(json.message[0].message))
            }
          })
          .catch(e => console.log(e))
    
      }


    return (
        <form className="container">
        
        
         <label>Nombre: </label>
         <input name="name" id="name" onChange={handleChange}></input>

         <div>
         <label> Nombre de usuario: </label>
         <input 
            name="username" 
            id="username"
            onChange={handleChange}
            ></input>
         </div>

         <div>
         <label>Contraseña: </label>
         <input name="password" type="password" id="password" onChange={handleChange}></input>
         </div>


         <div>
         <div>
        <button onClick={onSubmit}>Enviar </button>
        </div>
        </div>
        </form>
    )
}

export default Holder;