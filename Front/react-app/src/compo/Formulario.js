import React from 'react';




const Formu =() => {
    return(
        
        <div className="basty">
        <div className="container">
            <div className="formulario">
            
            <span className="title"> Formulario General </span>
        
            
            <form className="row g-3">
            
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label  className="form-label">
                Nombre del Pasajero
                </label>
                <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                Direccion de Origen
                </label>
                <input
                type="text"
                className="form-control"
                id="DireccionOrigen "
                placeholder="Ejemplo: La Pintana 2108"
                />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                Direccion de Destino
                </label>
                <input
                type="text"
                className="form-control"
                id="DireccionDestino"
                placeholder="Ejemplo: Aeropuerto"
                />
            </div>
            <div className="col-12">
                <label  className="form-label">
                Telefono de Contacto
                </label>
                <input
                type="int"
                className="form-control"
                id="DireccionDestino"
                placeholder="Ejemplo: +56979826650"
                />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Hora de Inicio
                </label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Hora de Termino
                </label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                Fecha
                </label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">
                Pasajero/s
                </label>
                <select id="inputState" className="form-select">
                <option selected=""></option>
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>

                </select>
            </div>
            
            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                Enviar
                </button>
            </div>
            </form>
            </div>
        

 </div>
    
<div className="chao">
        <div className="footer"> 
                  <>
          <meta charSet="UTF-8" />
          <title>Pie de pagina</title>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <link rel="stylesheet" href="basty.css" />
          {/*Iconos*/}
        </>
                  <footer className="pie-pagina">
                  <div className="grupo-1">
                    <div className="box">
                      <figure>
                        <a href="#">
                          <img src="./TRANSPORTE.png" />
                        </a>
                      </figure>
                    </div>
                    <div className="box">
                      <h2>SOBRE NOSOTROS</h2>
                      <p>
                      Bienvenidos a trasportes Jcu somos una empresa dedicada al
                      transporte privado y particular.
                      </p>
                      Contactanos al +56990201831
                      <p>
                        
                      </p>
                    </div>
                    <div className="box">
                      <h2>SIGUENOS</h2>
                      <div className="red-social">
                        <a href="#" className="fa fa-facebook" />
                        <a href="https://www.instagram.com/_nxred._/" className="fa fa-instagram" />
                        <a href="#" className="fa fa-twitter" />
                        <a href="#" className="fa fa-youtube" />
                      </div>
                    </div>
                  </div>
                  <div className="grupo-2">
                    <small>
                      © 2022 <b>JCU</b> - Todos los Derechos Reservados.
                    </small>
                  </div>
                </footer>
            </div>
        </div>

</div>
    
        
        
       
    )

    
}

export default Formu;