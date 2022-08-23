import React from 'react'

const Imagen = ({urlImgen}) => {
  return (
    <div>
        <img src={urlImgen} className='mr-3' alt="" /> 
    </div>
  )
}

export default Imagen