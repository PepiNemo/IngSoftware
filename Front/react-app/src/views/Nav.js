import { Link } from 'react-router-dom';
import { useContext } from "react"

import { RolContext } from "../context/rolContext"


export function NavBar() {

  const { rol } = useContext(RolContext)

  const OnClick = () => {
    console.log(rol)
  }

  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-dark">

        <div className="container-fluid">

          <Link className="navbar-brand text-light" to='/Principal'>
            <img src='./TRANSPORTE.png' width='60' />
          </Link>

          <Link className="nav-link text-light" onClick={OnClick}>{rol}</Link>


          <button className="navbar-toggler" type="button" datbs-toggle="collapse" datbs-target="#navbarNavAltMarkup" aricontrols="navbarNavAltMarkup" ariexpanded="false" arilabel="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">


              {
                (rol == "Normal")
                  ? <>
                    <Link className="nav-link text-light" to='/FormViaje'>Pide tu viaje Aqui!</Link>
                    <Link className="nav-link active text-light bi bi-person-fill" aricurrent="page" to='/Sesion'>Sesion</Link>
                  </>
                  : null
              }

              {
                (rol == "stakeHolder")
                  ? <>
                    <Link className="nav-link text-light" to='/PedirViajeSH'>Pedir Viaje</Link>
                    <Link className="nav-link text-light" to='/EditarPerfilSH'>Editar Perfil</Link>
                    <Link className="nav-link text-light" to='/TablaMisViajesSH'>Mis Viajes</Link>
                    <Link className="nav-link text-light" to='/Logout'>Cerrar Sesion</Link>
                  </>
                  : null
              }

              {
                (rol == "conductor" || rol == "admin")
                  ? <>
                    <Link className="nav-link text-light" to='/EditarPerfilConductor'>Editar Perfil </Link>
                    <Link className="nav-link text-light" to='/TablaMisViajesConductor'>Mis Viajes</Link>
                    <Link className="nav-link text-light" to='/MisViajesSolicitadosConductor'>Mis Viajes Solicitados</Link>
                    <Link className="nav-link text-light" to='/Logout'>Cerrar Sesion</Link>
                  </>
                  : null
              }
              {
                (rol == "admin")
                  ? <>

                    <Link className="nav-link text-light" to="/EliminarStake">Eliminar Stake</Link>
                    <Link className="nav-link text-light" to='/CrearConductor'>Crear Conductor</Link>
                    <Link className="nav-link text-light" to='/CrearStake'>Crear StakeHolder</Link>
                    <Link className="nav-link text-light" to='/TablaAdminCon'>Conductores</Link>

                    <Link className="nav-link text-light" to='/TablaAdminViajesSH'>Viajes De SH</Link>
                    <Link className="nav-link text-light" to="/Tarifas"> Tarifas </Link>
                    <Link className="nav-link text-light" to='/Logout'>Cerrar Sesion</Link>
                  </>
                  : null
              }
            </div>
          </div>
        </div>
      </nav>
    </div>

  )

}