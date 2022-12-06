import React from 'react';
import './App.css';
import Admin from './compo/Nav';
import Sesionn from './compo/Sesion';
import CrearConductor from './compo/CrearConductor';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Prin from './compo/Principal';
import EditarPerfilSH from './compo/EditarPerfilSH';
import FormViaje from './compo/FormViaje'
import CrearStake from './compo/CrearStake';
import EditarPerfilConductor from './compo/EditarCon';
import PedirViajeSH from './compo/PedirViajeSH';
import { CerrarSesion } from "./compo/cerrarSesion.js";

import VerConductores from './compo/TablaAdminCon';
import AdminViajesSH from './compo/TablaAdminViajesSH';
import ConductorMisViajes from './compo/TablaConductorMisViajes';
import SHMisViajes from './compo/TablaMisViajesSH';
// import 
import EditTabla from './compo/EditBlog';
function App () {
  return (
    
      <div className='App'>
        
        
        <Router>
        <Admin/> 
        
        
          <Routes>
          <Route path="/"  element={<Prin/>}/>
             <Route path="/Principal"  element={<Prin/>}/>
            <Route path="/FormViaje"  element={<FormViaje/>}/>
            <Route path="/Sesion"  element={<Sesionn/>}/>

            <Route path="/PedirViajeSH"  element={<PedirViajeSH/>}/>
            <Route path="/EditarPerfilSH"  element={<EditarPerfilSH/>}/>
            <Route path="/TablaMisViajesSH"  element={<SHMisViajes/>}/>


            <Route path="/EditarPerfilConductor"  element={<EditarPerfilConductor/>}/>
            <Route path="/TablaMisViajesConductor"  element={<ConductorMisViajes/>}/>

            <Route path="/CrearConductor"  element={<CrearConductor/>}/>
            <Route path="/CrearStake"  element={<CrearStake/>}/>
            <Route path="/TablaAdminCon"  element={<VerConductores/>}/>
            <Route path="/TablaAdminViajesSH"  element={<AdminViajesSH/>}/>
            
            <Route path="/Logout"  element={<CerrarSesion/>}/>

            {/* <Route path="/EditarBlog"  element={<EditTabla/>}/> */}





          </Routes>
          

        </Router>
        
      </div>

      
      
  );
}

export default App;
