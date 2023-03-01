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
import { Login } from './Componentes/Login'
import { Menu } from './Componentes/Menu'
import {Registro} from './Componentes/Registro';

function App() {
  return (
    <>
    <Menu/>
  
      <div className='container'>
        
        <Routes>
          <Route path='/' element={<Principal/>}></Route> 
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>
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
