import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './Form.css' 


// hora - fecha (agendar)
// maleta (siu o no )
function Formulario(){
    const navigate = useNavigate()

    const [nombre, setNombre] = useState("")

    const cambiarNombre=(e)=>{
        const value = e.target.value
        setNombre(value)
    }

    const [origen, setOrigen] = useState("")

    const cambiarOrigen=(e)=>{
        const value = e.target.value
        setOrigen(value)
    }

    const [destino, setDestino] = useState("")

    const cambiarDestino=(e)=>{
        const value = e.target.value
        setDestino(value)
    }

    const [hora, setHora] = useState("")

    const cambiarHora=(e)=>{
        const value = e.target.value
        setHora(value)
        
    }

    const [fecha, setFecha] = useState("")
    const [pago, setPago] = useState("efectivo")

    const cambiarFecha=(e)=>{
        const value = e.target.value
        setFecha(value)
    }

    const [transferencia, setTransferencia] = useState("transferencia")
    const [efectivo, setEfectivo] = useState("efectivo") 

    /*const [emailError, setEmailError] = useState("")

    const validateEmail =(e)=>{
        var email = e.target.value

        if(validator.isEmail(email)){
            setEmailError("valid email:)")
        }else{
            setEmailError("enter valid Email")
        }
    }*/

    const[email, setEmail] = useState("")
    const[menssage, setMenssage] = useState("")
    

    const emailValidation =(event)=>{
        event.preventDefault()
        const regEx=/([\da-z_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
        if(regEx.test(email)){
            setMenssage("email is valid")
        }else if(!regEx.test(email) && email ==""){
            setMenssage("email is not valid")
        }else{
            setMenssage("")
        }
        const datos = {
            "name": nombre,
            "number": "007",
            "dire_inicio": origen,
            "dire_destino": destino,
            "hora": hora,
            "fecha": fecha,
            "metodo_pago": pago
        }
        const js = JSON.stringify(datos)
        console.log(js)

        const url = "http://localhost:3300/api/TakeViaje"
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: js
        }
        fetch(url, options)
          .then(response => {
            console.log(response.status, "Holo")
            if(response.status === 201){
                alert("Viaje Agendado")
                navigate("/")
            }else{
                alert('Error en el formulario')
            }
          })
          .catch(e => console.log(e))
    }

    const handleOnChange=(e)=>{
        setEmail(e.target.value)
    }

    const changeFunc = ()=>{
        var selectBox = document.getElementById("pago");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        setPago(`${selectedValue}`)
    }

    return (
    <div className='prueba'>

        <h1>Formulario</h1>
        <form action=''>
        <div>
            
        <label>Nombre: </label>
        <input id ="nombre" name ="nombre" value ={nombre} onChange={cambiarNombre}></input>
        </div>

        <div>

        <lebel>Direccion Origen: </lebel>
        <input id="Origen" name="Origen" value={origen} onChange={cambiarOrigen}></input>
        
        <lebel>Direccion Destino: </lebel>
        <input id="Destino" name="Destino" value={destino} onChange={cambiarDestino}></input>

        </div>

        <div> 
         
         <lebel>Hora de inicio: </lebel>
         <input name='hora' id="hora" value={hora} onChange={cambiarHora}></input>

         <label>
         Fecha para agendar: 
         <input type="date" name="bday" value={fecha} onChange={cambiarFecha}/>
         </label>

        </div>  

        <div>
        <lebel for="pago">Seleccione metodo de pago: </lebel>
        <select name="pago" id="pago" onChange={changeFunc}>

        <option name='transferencia' id="transferencia" value={transferencia} >Transferencia</option>  
        <option name="efectivo" id='efectivo' value={efectivo} >Efectivo</option>

        </select>

        </div>
        
        <label>Email: </label>
        <input type="email" placeholder='email' value={email} onChange={handleOnChange}></input>
        <button onClick={emailValidation} >Enviar</button> 
        {menssage}
        </form>
            
    </div>)
}

export default Formulario;