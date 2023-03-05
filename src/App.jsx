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
import { EditCliente } from './Componentes/usuarios/EditClientes'
import { EditProveedores } from './Componentes/usuarios/EditProveedor'
import { EditBuzosyCamperas } from './Componentes/buzo y camperas/EditBuzosyCamperas'
import { EditPantalones } from './Componentes/pantalones/EditPantalones'
import { EditMallas } from './Componentes/mallas/EditMallas'
import { EditRemeras } from './Componentes/remeras/EditRemeras'

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
         

          <Route path='/edit_clientes/:idClientes' element={<EditCliente/>} ></Route>
          <Route path='/edit_proveedores/:idProveedores' element={<EditProveedores/>} ></Route>


          <Route path='/listarremeras' element={<ListaRemeras/>}></Route>
          <Route path='/edit_remeras/:idRemeras' element={<EditRemeras/>}></Route>


          <Route path='/listarpantalones' element={<ListaPantalones/>}></Route>
          <Route path='/edit_pantalones/:idPantalones' element={<EditPantalones/>}></Route>


          <Route path='/listarchanclas' element={<ListaChanclas/>}></Route>
          <Route path='/edit_chanclas/:idChanclas' element={<EditBuzosyCamperas/>}></Route>



          <Route path='/listarbuzosycamperas' element={<ListaBuzos/>}></Route>
          <Route path='/edit_buzosycamperas/:idBuzosyCamperas' element={<EditBuzosyCamperas/>}></Route>
          

          <Route path='/listarmallas' element={<ListaMallas/>}></Route>
          <Route path='/edit_mallas/:idMallas' element={<EditMallas/>}></Route>

        </Routes>
        </div>
    
    </>
  )
}

export default App
