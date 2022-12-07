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
                  <Link className="nav-link text-light" to='/PedirViajeSH'>SH-Pedir Viaje</Link>
                  <Link className="nav-link text-light" to='/EditarPerfilSH'>SH-Editar Perfil</Link> 
                  <Link className="nav-link text-light" to='/TablaMisViajesSH'>SH-Mis Viajes</Link>
                  
 
                  <Link className="nav-link text-light" to="/AgregarTarifa">
                  Agregar Tarifa
                  </Link>

                  <Link className="nav-link text-light" to="/Readtari">
                   VT
                  </Link>

                  <Link className="nav-link text-light" to='/EditarPerfilConductor'>CA-Editar Perfil </Link>
                  <Link className="nav-link text-light" to='/TablaMisViajesConductor'>CA-MisViajes</Link>
                  <Link className="nav-link text-light" to='/MisViajesSolicitadosConductor'>CA-MisViajesSolicitados</Link>
                  <Link className="nav-link text-light" to="/EliminarStake">A-Eliminar Stake</Link>
                  <Link className="nav-link text-light" to='/CrearConductor'>A-Crear Conductor</Link>
                  <Link className="nav-link text-light" to='/CrearStake'>A-Crear StakeHolder</Link>
                  <Link className="nav-link text-light" to='/TablaAdminCon'>A-VerConductores</Link>
                  <Link className="nav-link text-light" to='/TablaAdminViajesSH'>A-ViajesDeSH</Link>
                  <Link className="nav-link text-light" to='/Logout'>Cerrar Sesion</Link>

                  
                  
                </div>
              </div>
            </div>
          </nav>
          </div>

    )
    
}
export default Admin;