import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//const url = "http://localhost:3300/api/admin/CreateConductor"
const url = "http://jsonplaceholder.typicode.com/users"

const EditTabla = () =>{
    const [Nombre,setNombre] = useState('')
    const [Rut,setRut] = useState('')
    const [Prioridad,setPrioridad] = useState('')
    const navigate = useNavigate()


    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()

        navigate('/')
    }

    useEffect(()=>{
        getBlogById()
    },[])

    const getBlogById = async()=>{

    }
    return(
        <div className="basty">
        <div className="container">
            <div className="formulario">
            
            <span className="title"> Crear Conductor </span>
        
            
            <form className="row g-3" onSubmit={update}>

            <div className="col-md-6">
                <label  className="form-label">
                Nombre del Conductor
                </label>
                <input name="Nombre" onChange={(e)=>setNombre(e.target.value)} type="text" className="form-control" id="inputPassword4" />
            </div>

            <div className="col-md-6">
                <label  className="form-label">
                Rut Conductor
                </label>
                <input name="Rut" onChange={(e)=>setRut(e.target.value)} type="text" className="form-control" id="inputPassword4" />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Username
                </label>
                <input name="Username" type="text" className="form-control" id="inputCity" /* onChange={handleChange} */ />
            </div>

            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Password
                </label>
                <input name="Password" type="text" className="form-control" id="inputCity" /* onChange={handleChange} */ />
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
                //onChange={handleChange}
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
                //onChange={handleChange}
                />
            </div>


            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Prioridad
                </label>
                <input name="Prioridad" onChange={(e)=>setPrioridad(e.target.value)} type="int" className="form-control" id="inputCity" /* onChange={handleChange} */ />
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

    )

}

export default EditTabla;