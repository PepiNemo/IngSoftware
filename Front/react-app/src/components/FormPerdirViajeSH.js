import { FormImput, FormImput2, FormImputSeleccion } from "./formImput"

export function FormPedirViajeSH(props=""){


    return(
        <form className="row g-3">

          <FormImput2
            label="Nombre del Stake Holder que solicita el viaje"
            type="text"
            name="Nombre_StakeHolder"
            value={props.Nombre_StakeHolder}
            onChange={props.handleChange}
          />

          <FormImput
            label="Nombre del pasajero representante"
            type="text"
            name="Nombre_Pasajero_Representante"
            value={props.Nombre_Pasajero_Representante}
            onChange={props.handleChange}
          />

          <FormImput
            label="Numero de contacto del pasajero representante"
            type="text"
            name="Celular_Pasajero_Representante"
            value={props.Celular_Pasajero_Representante}
            onChange={props.handleChange}
          />

          <FormImput
            label="Direccion Origen"
            type="text"
            name="Direccion_Origen1"
            value={props.Direccion_Origen1}
            onChange={props.handleChange}
          />

          <FormImput
            label="Direccion Destino"
            type="text"
            name="Direccion_Destino1"
            value={props.Direccion_Destino1}
            onChange={props.handleChange}
          />

          <FormImput
            label="Hora de Inicio"
            type="text"
            name="Fecha_Hora_Inicio"
            value={props.Fecha_Hora_Inicio}
            onChange={props.handleChange}
          />

          <FormImput
            label="Hora de Termino"
            type="text"
            name="Fecha_Hora_Termino"
            value={props.Fecha_Hora_Termino}
            onChange={props.handleChange}
          />

          <FormImput
            label="Cantidad de maletas"
            type="text"
            name="Numero_Maletas"
            value={props.Numero_Maletas}
            onChange={props.handleChange}
          />

          <FormImputSeleccion
            label="Numero de Pasajeros"
            id="Numero_Pasajeros"
            name="Numero_Pasajeros"
            className="form-select"
            value={props.Numero_Pasajeros}
            onChange={props.handleChange}
            options={[1,2,3,4]}
          />

          <FormImputSeleccion
            label="Tamaño de las Maletas"
            id="Tamaño_Maletas" 
            name="Tamaño_Maletas"
            value={props.Tamaño_Maletas}
            onChange={props.handleChange}
            options={["Pequeña", "Mediana", "Grande"]}
          />

          <FormImput
            label="Detalles extras del viaje"
            type="text"
            name="Detalles_Extras"
            value={props.Detalles_Extras}
            onChange={props.handleChange}
          />
          {
            (props?.SolicitarViaje)
            ?<div className="col-12">
                <button className="btn btn-primary" onClick={props.SolicitarViaje}>
                    Solicitar
                </button>
            </div>
            : null
          }
          {
            (props?.SaveEditarViajeSH)
            ?<div className="col-12">
                <button className="btn btn-primary" onClick={props.SaveEditarViajeSH}>
                Editar
                </button>
            </div>
            : null
          }
          
        </form>
    )
}