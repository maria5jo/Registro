import React from 'react'
import { Link } from 'react-router-dom'

const Olvideclave = () => {
  return (

    <center>
    <div>
      <form>
     <label> Ingrese su correo</label><br></br>
      <input type="email"placeholder="Correo"/><br></br>
      <label> contraseña nueva</label><br></br>
      <input type="password"placeholder="contraseña"/><br></br>
      <button>
      Enviar
    </button>
      </form>
      <Link
        to="/"
      >
        Login
      </Link><br></br>
      <Link
        to="/registro"
      >
         si no tienes cuenta, registrate
      </Link>

    </div>

    </center>
  )
}

export default Olvideclave