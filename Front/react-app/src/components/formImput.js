export const FormImput = (props="") => {
  return (
    <div className="col-md-6">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        id={props.id}
        className="form-control"
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export const FormImput2 = (props="") => {
  return (
    <div className="col-12">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        id={props.id}
        className="form-control"
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export  const FormImputSeleccion = (props="") => {
  const classNameDiv = props.classNameDiv || "col-md-6"
  return (
    <div className={classNameDiv}>
      <label className="form-label" htmlFor="inputState">
        {props.label}
      </label>
      <select
        id={props.id}
        key={props.id}
        name={props.name}
        className="form-select"
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map(valueOption => <option key={valueOption} value={valueOption}> {valueOption} </option>)}
      </select>
    </div>
  );
}
