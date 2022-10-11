import React, {useState} from "react";
import { useNavigate} from 'react-router-dom'
import "./stake.css"


function Holder(){

    const navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        "username": "",
        "password": "",
        "name": "",
        "role": "stakeHolder"
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]:value})
        console.log(name, value)
    }

    const onSubmit = (event)=> {
        event.preventDefault()

        const url = "http://localhost:3300/api/admin/registerStakeHolder"
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
                alert("Usuario StakeHolder creado.")
                navigate("/")
            }else{
              alert('Usuario y/o contraseña incorrecto')
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