import React from 'react';
import {Link} from 'react-router-dom';



const Admin =() =>{
    return(
            <div> 
          <nav className="navbar navbar-expand-lg bg-dark">
            
            <div className="container-fluid">

              <Link className="navbar-brand text-light" to='/Principal'>
                <img src='./TRANSPORTE.png' width='60'></img>
              </Link>
              <Link className="nav-link text-light" to='/FormViaje'>Pide tu viaje Aqui!</Link>
              

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                
                  <Link className="nav-link active text-light bi bi-person-fill" aria-current="page" to='/Sesion'>Sesion</Link>
                  <Link className="nav-link text-light" to='/Editar'>Editar Perfil StakeHolder</Link>
                  <Link className="nav-link text-light" to='/CrearConductor'>Crear Conductor</Link>
                  <Link className="nav-link text-light" to='/EditarCon'>Editar Perfil Conductor</Link>
                  <Link className="nav-link text-light" to='/ViajeStake'>Pedir Viaje StakeHolder</Link>

                  <Link className="nav-link text-light" to='/CrearStake'>Crear StakeHolder</Link>

                  
                  
                </div>
              </div>
            </div>
          </nav>
          </div>

    )
    
}
export default Admin;