import React from 'react'
import Imagen from "./Imagen"
const Comentarios = (props) => {
  return (
    <div className='media'>
       <Imagen urlImgen={props.urlImgen}/>
        <div className="media-body">
            <h5 className="mt-0">Nombre de la Persona : {props.persona}</h5>
            {props.texto}
        </div>
    </div>
  )
}

export default Comentarios