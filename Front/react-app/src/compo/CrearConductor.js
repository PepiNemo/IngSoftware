import {useState} from 'react';
import { useNavigate } from 'react-router-dom'


const CrearConductor =() =>{
    const navigate = useNavigate()
    const [formValues, setFromValues] = useState({
        Nombre: "",
        Rut: "",
        Correo: "",
        Celular: "",
        Username: "",
        Password: "",
        Prioridad: "",
        Imagen_URL: "www.google.com"
    });
    
    const onSubmit = (event) => {
        event.preventDefault();

        const url = "http://localhost:3300/api/admin/CreateConductor"

        console.log(JSON.stringify(formValues))
        const options = {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(formValues)
        }
    
        fetch(url, options)
          .then(response => {
            if (!response.ok) {
                response.json().then(json => {
                    if(json?.message){
                        (json.message[0]?.message)
                        ? alert(json.message[0].message)
                        : alert(json.message)
                        console.log(json)
                    }else{
                        const res = JSON.stringify(json.error.keyValue)
                        alert(`Problemas con la llave: ${res}`)
                    }

                })
            } else {
              alert("Has registrado al conductor satisfactoriamente")
              navigate("/")
            }
        })


        console.log(JSON.stringify(formValues));
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFromValues({ ...formValues, [name]: value });
    };

    return (
        <div className="basty">
        <div className="container">
            <div className="formulario">
            
            <span className="title"> Crear Conductor </span>
        
            
            <form className="row g-3" onSubmit={onSubmit}>

            <div className="col-md-6">
                <label  className="form-label">
                Nombre del Conductor
                </label>
                <input name="Nombre" onChange={handleChange} type="text" className="form-control" id="inputPassword4" />
            </div>

            <div className="col-md-6">
                <label  className="form-label">
                Rut Conductor
                </label>
                <input name="Rut" onChange={handleChange} type="text" className="form-control" id="inputPassword4" />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Username
                </label>
                <input name="Username" type="text" className="form-control" id="inputCity" onChange={handleChange} />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Password
                </label>
                <input name="Password" type="text" className="form-control" id="inputCity" onChange={handleChange} />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                Correo electronico
                </label>
                <input 
                name="Correo"
                type="email"
                className="form-control" 
                id="inputEmail4" 
                onChange={handleChange}
                />
            </div>

            
            <div className="col-md-6">
                <label  className="form-label">
                Numero de Contacto
                </label>
                <input
                name="Celular"
                type="int"
                className="form-control"
                id="DireccionDestino"
                placeholder="Ejemplo: +56979826650"
                onChange={handleChange}
                />
            </div>


            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Prioridad
                </label>
                <input name="Prioridad" type="int" className="form-control" id="inputCity" onChange={handleChange} />
            </div>
            
            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                Enviar
                </button>
            </div>
            </form>
            </div>
        

 </div>
    


</div>
    );
  }
  
  export default CrearConductor;