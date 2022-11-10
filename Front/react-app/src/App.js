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



          </Routes>
          

        </Router>
        
      </div>

      
      
  );
}

export default App;
