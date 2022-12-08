import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormImput2 } from "./formImput";
import CrearConductor from "./CrearConductor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




//const url = "http://jsonplaceholder.typicode.com/users"

export default function VerviajesCon() {

    const [viajes, setViajes] = useState();
  useEffect(() => {
    const url = "http://localhost:3300/api/conductor/readViajesConductor";
    const options = {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ All: "True" })
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => mostrarData(data))
      .catch((error) => console.log(error));
  }, []);

  const mostrarData = (data) => {
    /* console.log(data);
    let tbody = "";
    for (let i = 0; i < data.length; i++) {
      tbody += `<tr><td>${data[i]._id}</td><td>${data[i].Nombre_Pasajero}</td><td>${data[i].Dire_Inicio}</td><td>${data[i].Dire_Destino}</td></tr>`;
    }
    document.getElementById("data").innerHTML = tbody; */
    console.log(data)
    let tbody = ''
    let viajesSH = data.ViajesSH
    if (viajesSH != undefined) {
        console.log("Viajes SH: ", viajesSH)
        let thead = `<tr>
                    <th>Nombre_Pasajero</th>
                    <th>Dire_Inicio</th>
                    <th>Dire_Destino</th>
                
                </tr>`
        document.getElementById('Encabezado').innerHTML = thead
        for (let i = 0; i < viajesSH.length; i++) {
            tbody += `<tr>
            <td>${viajesSH[i].Nombre_Pasajero}</td>
            <td>${viajesSH[i].Dire_Inicio}</td>
            <td>${viajesSH[i].Dire_Destino}</td>
            </tr>`
        }
        document.getElementById('data1').innerHTML = tbody
        
    }

    let tbody2 = ''
    
    let viajesComunes = data.Viajescomunes
    console.log("Data: ", data.Viajescomunes)
    console.log("viajesCOMUNE", viajesComunes)
    if (viajesComunes != undefined) {
        console.log("Viajes Comunes", viajesComunes)
        let thead = `<tr>
                        <th>Nombre_Pasajero</th>
                        <th>Dire_Inicio</th>
                        <th>Dire_Destino</th>
    
                    </tr>`
        document.getElementById('Encabezado2').innerHTML = thead
        for (let i = 0; i < viajesComunes.length; i++) {
            tbody2 += `<tr>
            <td>${viajesComunes[i].Nombre_Pasajero}</td>
            <td>${viajesComunes[i].Dire_Inicio}</td>
            <td>${viajesComunes[i].Dire_Destino}</td>
            </tr>`
        }
    }
    
    console.log({"ViajesSH": viajesSH})
    console.log({"viajesComunes": viajesComunes})
    //document.getElementById('data').innerHTML = tbody
    document.getElementById('data2').innerHTML = tbody2

}
    





 


  return (


    <div className='container'>
            <form >

            </form>
            <div className='row'>
                <div className='col'>
                    <table className='table' id='Tabla' >
                        <thead className='table-primary'  id="Encabezado">
                        </thead>
                        <tbody id="data">

                        </tbody>
                    </table>
                </div>


            </div>


            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'  id="Encabezado2">

                        </thead>
                        <tbody id="data2">

                        </tbody>
                    </table>
                </div>


            </div>

        </div>


   /*  <div>
      <div className="container">
        
        

        

          

          

        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>ID Conductor</th>
                  <th>Nombre Pasajero</th>
                  <th>Inicio</th>
                  <th>Final</th>
                </tr>
              </thead>
              <tbody id="data"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */
  );

}