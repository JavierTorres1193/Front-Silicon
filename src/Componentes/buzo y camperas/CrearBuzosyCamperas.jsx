import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function CrearBuzosyCamperas(){

    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [mensajeError, setmensajeError] = useState('')
    const [Talle, setTalle] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Color, setColor] = useState('');

    
    
    const crear_producto = () => {
        if (Talle && Color) {
          const datos_producto = {
            Talle: Talle,
            Color: Color
            
          };
          
          fetch('/buzosycamperas', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos_producto)
          })
          .then(response => response.json())
          .then(data => {
            if (data.error) {
              alert(data.error);
            } else {
              setmensajeSuccess('Se agrego el Producto');
              setTimeout(() => {
                setmensajeSuccess('');
              }, 2000);
            }
          })
          .catch(error => {
            setmensajeError('Ya existe el Producto');
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
        <form>
        <div className="card table bg-dark text-white">
            <div className="card-header">
                Agregar Producto Nuevo
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
                  <label for="">Talle</label>
                  <input 
                  required
                  type="text"
                   value={Talle} 
                   onChange={(event)=>setTalle(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Cantidad</label>
                  <input 
                  required
                  type="number" min="0"
                   value={Cantidad} 
                   onChange={(event)=>setCantidad(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Color</label>
                  <input 
                  required
                  type="text"
                   value={Color} 
                   onChange={(event)=>setColor(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                
                <div className="row">
                    <div className='col-3 mt-3'>
                        <button  onClick={crear_producto}  type="button" className="btn btn-outline-secondary text-success">Agregar</button>
                        <small id="helpId" className="text-muted">&nbsp;</small>

                        <Link to={'/listarbuzosycamperas'}><button type="button" className="btn btn-outline-secondary text-primary">Volver al listado</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </form>
    )
}