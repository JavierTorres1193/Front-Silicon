import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function CrearBuzosyCamperas(){

    
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [Talle, setTalle] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Color, setColor] = useState('');
    
    
    const crear_buzosycamperas = ()=>{
        const datos_buzosycamperas={
            Talle: Talle,
            Cantidad: Cantidad,
            Color: Color 
        };
        console.log(datos_buzosycamperas)
        API.SaveBuzosyCamperas(datos_buzosycamperas);
        setmensajeSuccess('Se agrego al producto')
            setTimeout(()=>{
                setmensajeSuccess('')
                // window.location.href('/listarbuzosycamperas')
            }, 2000)
    }

    return(
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
            <div className="card-body">
                <div className='row'>

                <div className="form-group col-4" >
                  <label for="">Talle</label>
                  <input 
                  type="text"
                   value={Talle} 
                   onChange={(event)=>setTalle(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Cantidad</label>
                  <input 
                  type="text"
                   value={Cantidad} 
                   onChange={(event)=>setCantidad(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                <div className="form-group col-4">
                  <label for="">Color</label>
                  <input 
                  type="text"
                   value={Color} 
                   onChange={(event)=>setColor(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
                
                <div className="row">
                    <div className='col-3 mt-3'>
                        <button  onClick={crear_buzosycamperas}  type="button" className="btn btn-outline-secondary text-success">Agregar</button>
                        <small id="helpId" className="text-muted">&nbsp;</small>

                        <Link to={'/listarbuzosycamperas'}><button type="button" className="btn btn-outline-secondary text-primary">Volver al listado</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}