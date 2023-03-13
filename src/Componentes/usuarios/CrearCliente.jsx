import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function CrearCliente(){

    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setmensajeError] = useState('')
    const [Nombre, setNombre] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Producto, setProducto] = useState('');

    
    
    const crear_cliente = () => {
        if (Nombre && Direccion && Telefono && Producto) {
          const datos_cliente = {
            Nombre: Nombre,
            Direccion: Direccion,
            Telefono: Telefono,
            Producto: Producto
          };
          
          fetch('/proveedores', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos_cliente)
          })
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              alert(data.error);
            } else {
              setmensajeSuccess('Se agregó al Cliente');
              setTimeout(() => {
                setmensajeSuccess('');
              }, 2000);
            }
          })
          .catch(error => {
            setmensajeError('Ya existe el Cliente');
            setTimeout(() => {
              setmensajeError('');
            }, 2000);
          });
        } else {
            setmensajeError('Complete todos los campos');
            setTimeout(() => {
              setmensajeError('');
            }, 2000);
        }
      };
    return(
        <div className="card table bg-dark text-white">
            <div className="card-header">
                Agregar Cliente Nuevo
            </div>
            {
                mensajeSuccess?
                <div className="alert alert-success" role="alert">
                    {mensajeSuccess}
                </div>:''
            }
             {
                mensajeError?
                <div className="alert alert-danger" role="alert">
                    {mensajeError}
                </div>:''
            }
            <div className="card-body">
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
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Producto</label>
                  <input 
                  type="text"
                   value={Producto} 
                   onChange={(event)=>setProducto(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                
                <div className="row">
                    <div className='col-3 mt-3'>
                        <button  onClick={crear_cliente}  type="button" className="btn btn-outline-secondary text-success">Agregar</button>
                        <small id="helpId" className="text-muted">&nbsp;</small>

                        <Link to={'/clientes'}><button type="button" className="btn btn-outline-secondary text-primary">Volver al listado</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}