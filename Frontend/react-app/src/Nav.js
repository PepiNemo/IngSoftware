import './Form.css' 
import {Link} from "react-router-dom";
import axios from 'axios'
 function Nav(){

  const Logout = () => {
      const url = "http://localhost:3300/api/logout" 

      const options = {
        method: 'POST',
        credentials: 'include'
      }

      fetch(url, options)
        .then(response => {
            if(response.ok){
              alert("Se ha cerrado sesion exitosamente")
              //console.log(response.json())
            }
            else{alert("Debes primero iniciar sesion para Cerrar.")}
          })
        .catch(e => console.log(e))
  }

  return  ( 
    
    <div className="topnav">
      
       <header>

        <Link class="active" to="/"> Inicio </Link>
        <Link class="active" to="/Login"> Login </Link>
        <Link class="active" to="/createSH"> Crear StakeHolder </Link>
        <Link class="active" onClick={Logout}> Cerrar Session </Link>

       </header>

  </div> )
    
}

export default Nav;