import { Link } from 'react-router-dom'
import { Principal } from './Principal'

export function Menu(){
    return(
        <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand text-light">Banzai Clothes</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link text-light"to={'/'}>Inicio</Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Administración
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to={'/Clientes'}>Clientes</Link>
          <Link className="dropdown-item" to={'/Proveedores'}>Proveedores</Link>

          
        </div>
      </li>



      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to={'/listarbuzosycamperas'}>Buzos y camperas</Link>
          <Link className="dropdown-item" to={'/listarchanclas'}>Chanclas</Link>
          <Link className="dropdown-item" to={'/listarmallas'}>Mallas</Link>
          <Link className="dropdown-item" to={'/listarpantalones'}>Pantalones</Link>
          <Link className="dropdown-item" to={'/listarremeras'}>Remeras</Link>
        </div>
      </li>
      <li className="nav-item active">
      <Link className="nav-link text-danger"to={'/login'}>Salir</Link>
      </li>
    </ul>
  </div>
</nav>

    )
}