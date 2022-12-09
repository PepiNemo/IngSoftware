import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { NavBar } from './views/Nav';
import { Principal } from './views/Principal';
import { Sesion } from './views/Sesion';
import { CerrarSesion } from "./views/cerrarSesion.js";

import { PedirViajeSH } from './views/StakeHolder/PedirViajeSH';
import { EditarPerfilSH } from './views/StakeHolder/EditarPerfilSH';
import { SHMisViajes } from './views/StakeHolder/TablaMisViajesSH';
import {UpdateViajeSH} from "./views/StakeHolder/UpdateViajeSH"


import { ConductorMisViajesSolicitados } from "./views/Conductor/ConductorViajesSolicitados"
import { ConductorMisViajesAceptados } from './views/Conductor/TablaConductorMisViajes';
import { EditarPerfilConductor } from './views/Conductor/EditarCon';


import { CrearStake } from './views/Administrador/CrearStake';
import { CrearConductor} from './views/Administrador/CrearConductor';
import {AgregarTarifa} from './views/Administrador/AgregarTarifa';
import { VerConductores } from './views/Administrador/TablaAdminCon';
import {AdminViajesSH} from './views/Administrador/TablaAdminViajesSH';
import {Readtari} from './views/Administrador/Readtari';
import { BorrarStake } from "./views/Administrador/BorrarStake"



import FormViaje from './views/CliComun/FormViaje'


import { RolProvider } from "./context/rolContext"

function App() {
  return (

    <div className='App'>


      <Router>
        <RolProvider>
          <NavBar />
          <Routes>

            <Route path="/" element={<Principal />} />

            <Route path="/Principal" element={<Principal />} />
            <Route path="/FormViaje" element={<FormViaje />} />

            <Route path="/Sesion" element={<Sesion />} />


            <Route path="/PedirViajeSH" element={<PedirViajeSH />} />
            <Route path="/EditarPerfilSH" element={<EditarPerfilSH />} />
            <Route path="/TablaMisViajesSH" element={<SHMisViajes />} />

            <Route path="/Readtari" element={<Readtari />} />

            <Route path="/AgregarTarifa" element={<AgregarTarifa />} />

            <Route path="/EditarPerfilConductor" element={<EditarPerfilConductor />} />
            <Route path="/TablaMisViajesConductor" element={<ConductorMisViajesAceptados />} />
            <Route path="/MisViajesSolicitadosConductor" element={<ConductorMisViajesSolicitados />} />

            <Route path="/EliminarStake" element={<BorrarStake />} />

            <Route path="/UpdateViajeSH" element={<UpdateViajeSH />} />

            <Route path="/CrearConductor" element={<CrearConductor />} />
            <Route path="/CrearStake" element={<CrearStake />} />
            <Route path="/TablaAdminCon" element={<VerConductores />} />
            <Route path="/TablaAdminViajesSH" element={<AdminViajesSH />} />

            <Route path="/Logout" element={<CerrarSesion />} />
          </Routes>

        </RolProvider>


      </Router>


    </div>


  );
}

export default App;
