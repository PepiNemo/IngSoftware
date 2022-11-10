import React from "react";
import { Foter } from "./Foter";

const Prin = () => {
  return (
    <div className="principal">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./taxi3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./taxi2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./taxi33.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*hasta aca funcion que ayuda a las cosas locas*/}

      <div className="hola">
        <>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Nuestros Descuentos{" "}
                <span className="text-muted"> Descuentos todo el semestre</span>
              </h2>
              <p className="lead">
                Aprovecha el descuento exclusivo de noviembre y prefierenos.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                src="./taxi2.png"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Nuestros Servicios
                <span className="text-muted">
                  {" "}
                  Diferentes servicios a tu alcance...
                </span>
              </h2>
              <p className="lead">Transporte al aeropuerto</p>
              <p className="lead">Vajes de turismo</p>
              <p className="lead">Viajes Regionales</p>
              <p className="lead">Traslado de Encomiendas</p>
              <p className="lead">Servicios para Empresa</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                src="./taxi3.png"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Nuestros automoviles<span className="text-muted"> </span>
              </h2>
              <p className="lead">
                Contamos con una amplia flota de vehiculos que se ajustan a
                todas las necesidades de nuestros clientes. Nuestra flota se
                compone por SUV,las cuales son ideales para viajes donde se
                requiere espacio y comodidad ademas de una gran capacidad de
                almacenar maletas. Tambien automoviles particulares para ofrecer
                comodidad y rapidez para los viajes, etc...
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                src="./taxi33.png"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
        </>
      </div>
      {/*hasta aca funcion hola que tiene las foticos*/}

      <Foter />
    </div>
  );
};

export default Prin;
