import {NavLink} from 'react-router-dom';

const Login = () => {
  return (
   <center>
    <div>
      <h1>login</h1>
      <form id="form" class="form" align="center" action="https://formspree.io/f/xzbyyrvn" method="POST">

      <div>
        
      <label>Usuario: </label><br></br>
      <input type="text" name="usuario" placeholder="tu usuario"/><br></br>
      <label>Contraseña:</label><br></br>
      <input type="password" name=""placeholder="tu clave"/><br></br>

        <button>
          Ingresar
        </button>

      </div>
      </form>
      


      <div>
      <NavLink to="/registro"><br></br>
        si no tienes cuenta, registrate
      </NavLink>
      </div>
      <div>
      <NavLink to="/olvide-clave">
       olvide clave
      </NavLink>
      </div>
      
      </div>
      </center>
      
  )
}

export default Login