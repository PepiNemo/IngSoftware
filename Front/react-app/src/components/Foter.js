import React from "react";

export const Foter = () => {
  return (
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
              <p>Contactanos al +56990201831</p>
            </div>
            <div className="box">
              <h2>SIGUENOS</h2>
              <div className="red-social">
                <a href="#" className="fa fa-facebook" />
                <a
                  href="https://www.instagram.com/_nxred._/"
                  className="fa fa-instagram"
                />
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
  );
};
