import NavBar from './Nav'
import HomePage from './Homepage'
import FormPedirViaje from './formPedirViaje'
import Login from './Login.js'
import { Routes, Route, useNavigate } from "react-router-dom";


function App() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Login`; 
    navigate(path);
  }

  return(
    <div>
    
    
    <Routes>
      <Route path="/" element={<><NavBar/><FormPedirViaje /> </>}/>
      <Route path="/Login" element={<Login />}/>
    </Routes> 

    </div>


  )

}

export default App;
