import NavBar from './Nav'
import FormPedirViaje from './formPedirViaje'
import CreateSH from './Holder.js'
import Login from './Login.js'
import { Routes, Route } from "react-router-dom";




function App() {
  return(
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<FormPedirViaje />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/createSH" element={<CreateSH />} />
      </Routes> 

    </div>
  )

}

export default App;
