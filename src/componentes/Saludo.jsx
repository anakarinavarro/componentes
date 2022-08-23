import React from "react";

const Saludo = (props) => {
    return (
        <div>
            <h3> Saludando a {props.persona}</h3>
            <p>Edad : {props.edad}</p>
        </div>
    )
}

export default Saludo 