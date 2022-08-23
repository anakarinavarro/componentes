import React from 'react'
import { useParams } from 'react-router-dom'


const Users = () => {
    const {id} = useParams()
    console.log(id)
    const [user, setUser] = React.useState([])

    React.useEffect(() => {
  
        const obtenerDatos = async () => {
            const data = await  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const users = await data.json()
            setUser(users)
         
        }
        obtenerDatos()
    }, [id])

  return (
    
    <div>
        <h3>
            {user.name}
        </h3>
        <p>
            {user.email}
        </p>
    </div>
  )
}

export default Users