export const FormImput = (props) => {
  return (
    <div className="col-md-6">
      <label for={props.id} className="form-label">
        {props.label}
      </label>
      <input
        id={props.id}
        className="form-control"
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export const FormImput2 = (props) => {
  return (
    <div className="col-12">
      <label for={props.id} className="form-label">
        {props.label}
      </label>
      <input
        id={props.id}
        className="form-control"
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};
