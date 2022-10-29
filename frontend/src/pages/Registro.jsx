import React from 'react'
import { Link } from 'react-router-dom'

const Registro = () => {
  return (
    <center><div>
      <h1>Registro</h1>
      <form>
        <label>Nombre</label><br></br>
        <input type="text" placeholder="Nombre" /><br></br>
        <label>telefono</label><br></br>
        <input type="number" placeholder="Telefono" /><br></br>
        <label>Direccion</label><br></br>
        <input type="text" placeholder="Direccion" /><br></br>

        <button>
          Registrar
        </button>
      </form>

      <Link
        to="/"
      >
        Login
      </Link> <br></br> 
      <Link
        to="/olvide-clave"
      >
        Olvide clave
      </Link>


    </div></center>
  )
}

export default Registro