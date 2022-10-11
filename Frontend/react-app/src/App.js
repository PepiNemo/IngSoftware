import NavBar from './Nav'
import FormPedirViaje from './formPedirViaje'
import CreateSH from './Holder.js'
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
      <NavBar />
      
      <Routes>
        <Route path="/createSH" element={<CreateSH />} />

        <Route path="/" element={<FormPedirViaje />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes> 

    </div>


  )

}

export default App;
