import './Form.css' 
import {Link} from "react-router-dom";

 function Nav(){

  const Logout = () => {
      const url = "http://localhost:3300/api/logout"
      
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }
      }
      fetch(url, options)
        .then(response => {
          console.log(response, "Holo")
          if(response.status === 200){
            alert("Has cerrado session")
          }else{
            alert('Necesitas haber iniciado Sesion para cerrar')
          }
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