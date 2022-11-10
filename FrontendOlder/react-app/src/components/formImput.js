
export const FormImput = (props) => {
    return (
        <div>
            <label for={props.id}> {props.label}</label>
                <input
                id={props.id}
                //className="FormImput"
                type="text"
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}/>
            
        </div>
    )
}