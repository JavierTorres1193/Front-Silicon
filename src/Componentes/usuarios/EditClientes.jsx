import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function CreaCliente(){

    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [Nombre, setNombre] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [Telefono, setTelefono] = useState('');
  
   
    const crear_cliente = ()=>{
        const datos_cliente={
            nombre: Nombre,
            Direccion: Direccion,
            Telefono: Telefono,
        };
        console.log(datos_cliente)
        API.SaveCliente(datos_cliente);
        setmensajeSuccess('Se agrego al cliente')
            setTimeout(()=>{
                setmensajeSuccess('')
                window.location.href('/clientes/')
            }, 2000)
    }

    return(
        <div className="card table bg-dark text-white">
            <div className="card-header">
                Edicion de los datos del cliente
            </div>
            {
                mensajeSuccess?
                <div className="alert alert-success" role="alert">
                    {mensajeSuccess}
                </div>:''
            }
            <div className="card-body ">
                <div className='row'>

                <div className="form-group col-4" >
                  <label for="">Nombre</label>
                  <input 
                  type="text"
                   value={Nombre} 
                    onChange={(event)=>setNombre(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Direccion</label>
                  <input 
                  type="text"
                   value={Direccion} 
                   onChange={(event)=>setDireccion(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Telefono</label>
                  <input 
                  type="text"
                   value={Telefono} 
                   onChange={(event)=>setTelefono(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted ">&nbsp;</small>
                </div>
        
                </div>
                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                            
                <button onClick={crear_cliente} type="button" className="btn btn-outline-secondary text-success">Guardar</button>
                <small id="helpId" className="text-muted">&nbsp;</small>

                <Link to={'/clientes'}>
                <button type="button" className="btn btn-outline-secondary text-primary">Volver a la lista</button>
                </Link>
                
                                
                </div>
                </td>
            </div>
            
        </div>
    )
}