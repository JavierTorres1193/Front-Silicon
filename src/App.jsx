import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Principal } from './Componentes/panel/Principal'
import { Link,Route, Routes } from 'react-router-dom'
import { ListaRemeras } from './Componentes/remeras/remeras'
import { ListaPantalones } from './Componentes/pantalones/pantalones'
import { ListaChanclas } from './Componentes/chanclas/chanclas'
import { ListaBuzos } from './Componentes/buzo y camperas/buzos'
import { ListaMallas } from './Componentes/mallas/mallas'
import { Login } from './Componentes/login/Login'
import { Menu } from './Componentes/panel/Menu'
import {Registro} from './Componentes/login/Registro';
import { Clientes } from './Componentes/usuarios/Clientes'
import { Proveedores } from './Componentes/usuarios/Proveedores'
import { CreaCliente } from './Componentes/usuarios/EditClientes'

function App() {
  return (
    <>
    <Menu/>
  
      <div className='container'>
        
        <Routes>
          <Route path='/' element={<Principal/>}></Route> 
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>

          <Route path='/clientes' element={<Clientes/>}></Route>
          <Route path='/proveedores' element={<Proveedores/>}></Route>

          <Route path='/crear_cliente' element={<CreaCliente/>} ></Route>

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
