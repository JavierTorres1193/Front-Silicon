import { useEffect,useState } from 'react'
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
import { CrearProveedor } from './Componentes/usuarios/CrearProovedor'
import { CrearBuzosyCamperas } from './Componentes/buzo y camperas/CrearBuzosyCamperas'
import { CrearChanclas } from './Componentes/chanclas/CrearChanclas'
import { CrearMallas } from './Componentes/mallas/CrearMallas'
import { CrearPantalones } from './Componentes/pantalones/CrearPantalones'
import { CrearRemeras } from './Componentes/remeras/CrearRemeras'

function App() {

  const [sesion, setSesion] = useState('');
  useEffect(()=>{

    const sesionLogeada = JSON.parse(localStorage.getItem('usuario'))
    if(sesionLogeada){
      setSesion(sesionLogeada)
      console.log('sesion logeada', sesionLogeada)
    }


  },[])

  return (
    <>
      {
      !sesion?
      
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
      </Routes>
      
      :
    
  
      <div className='container'>
        <Menu/>
        <Routes>
          <Route path='/' element={<Principal/>}></Route> 
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Registro/>}></Route>

          <Route path='/clientes' element={<Clientes/>}></Route>
          <Route path='/edit_clientes/:idClientes' element={<EditCliente/>} ></Route>

          <Route path='/proveedores' element={<Proveedores/>}></Route>
          <Route path='/crear_proveedor' element = {< CrearProveedor/>}></Route>
          <Route path='/edit_proveedores/:idProveedores' element={<EditProveedores/>} ></Route>
            

          <Route path='/listarremeras' element={<ListaRemeras/>}></Route>
          <Route path='/edit_remeras/:idRemeras' element={<EditRemeras/>}></Route>
          <Route path='/crear_remeras' element={<CrearRemeras/>}></Route>


          <Route path='/listarpantalones' element={<ListaPantalones/>}></Route>
          <Route path='/edit_pantalones/:idPantalones' element={<EditPantalones/>}></Route>
          <Route path='/crear_pantalones' element={<CrearPantalones/>}></Route>


          <Route path='/listarchanclas' element={<ListaChanclas/>}></Route>
          <Route path='/edit_chanclas/:idChanclas' element={<EditBuzosyCamperas/>}></Route>
          <Route path='/crear_chanclas' element={<CrearChanclas/>}></Route>


          <Route path='/listarbuzosycamperas' element={<ListaBuzos/>}></Route>
          <Route path='/edit_buzosycamperas/:idBuzosyCamperas' element={<EditBuzosyCamperas/>}></Route>
          <Route path='/crear_buzosycamperas' element={<CrearBuzosyCamperas/>}></Route>

          <Route path='/listarmallas' element={<ListaMallas/>}></Route>
          <Route path='/crear_mallas' element={<CrearMallas/>}></Route>
          <Route path='/edit_mallas/:idMallas' element={<EditMallas/>}></Route>

        </Routes>
        </div>
}
    
    </>
  )
}

export default App
