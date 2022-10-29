import {NavLink} from 'react-router-dom';

const Navegacion = () => {
  return (
   <div>
    <div>
    <NavLink to="/acerca-de">
      Acercade
    </NavLink>
    </div>
    <div>
      <NavLink to="/contactos">
        contactos

      </NavLink>
    </div>
    <div>
      <NavLink to="/">
        Login

      </NavLink>
    </div>
    </div>
  )
}

export default Navegacion