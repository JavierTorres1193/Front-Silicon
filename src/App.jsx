import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Principal } from './Componentes/Principal'
import { Link,Route, Routes } from 'react-router-dom'
import { ListaRemeras } from './componentes/remeras'
import { ListaPantalones } from './Componentes/pantalones'
import { ListaChanclas } from './Componentes/chanclas'
import { ListaBuzos } from './Componentes/buzos'
import { ListaMallas } from './Componentes/mallas'

function App() {
  return (
    <>
    
    <div className="App">

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Banzai Clothes</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to={'/'}>Inicio</Link>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    </ul>
  </div>
</nav>
  
        <Routes>
          <Route path='/' element={<Principal/>}></Route> 
          <Route path='/listarremeras' element={<ListaRemeras/>}></Route>
          <Route path='/listarpantalones' element={<ListaPantalones/>}></Route>
          <Route path='/listarchanclas' element={<ListaChanclas/>}></Route>
          <Route path='/listarbuzosycamperas' element={<ListaBuzos/>}></Route>
          <Route path='/listarmallas' element={<ListaMallas/>}></Route>

        </Routes>
    </div>
    </>
  )
}

export default App
