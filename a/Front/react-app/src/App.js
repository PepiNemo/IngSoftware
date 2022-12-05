import React from 'react';
import './App.css';
import Formu from './compo/Formulario';
import Admin from './compo/Nav';
import Sesionn from './compo/Sesion';
import CrearConductor from './compo/CrearConductor';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Prin from './compo/Principal';
import Edit from './compo/Editar';
import FormViaje from './compo/FormViaje'
import CrearStake from './compo/CrearStake';
import Edit2 from './compo/EditarCon';
import ViajeStake from './compo/ViajeStake';
import { CerrarSesion } from "./compo/cerrarSesion.js.js";

import Observar from './compo/TablaAdminCon';
import Observar2 from './compo/TablaAdminSH';
import Observar3 from './compo/CondVeeViajes';
import Observar4 from './compo/SHveeViajes';
// import 
import AgregarCond from './compo/AgregarCondu';
import EditTabla from './compo/EditBlog';
function App () {
  return (
    
      <div className='App'>
        
        
        <Router>
        <Admin/> 
        
        
          <Routes>
          <Route path="/"  element={<Prin/>}/>
            <Route path="/Sesion"  element={<Sesionn/>}/>
            <Route path="/FormViaje"  element={<FormViaje/>}/>
            <Route path="/CrearConductor"  element={<CrearConductor/>}/>
            <Route path="/Principal"  element={<Prin/>}/>
            <Route path="/Editar"  element={<Edit/>}/>
            <Route path="/CrearStake"  element={<CrearStake/>}/>
            <Route path="/EditarCon"  element={<Edit2/>}/>
            <Route path="/ViajeStake"  element={<ViajeStake/>}/>
            <Route path="/Logout"  element={<CerrarSesion/>}/>
            <Route path="/AgregarCondu"  element={<AgregarCond/>}/>
            <Route path="/EditarBlog"  element={<EditTabla/>}/>
            <Route path="/TablaAdminCon"  element={<Observar/>}/>
            <Route path="/TablaAdminSH"  element={<Observar2/>}/>
            <Route path="/CondVeeViajes"  element={<Observar3/>}/>
            <Route path="/SHVeeViajes"  element={<Observar4/>}/>




          </Routes>
          

        </Router>
        
      </div>

      
      
  );
}

export default App;
