import React, { useEffect,useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function EditBuzosyCamperas(){

    const [setBuzosyCamperas] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [Talle, setTalle] = useState('');
    const [Color, setColor] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const {idBuzosyCamperas} = useParams();





    useEffect(()=>{
        // trae_datos(idClientes)
        API.getBuzosyCamperasById(idBuzosyCamperas).then(setBuzosyCamperas)
    },[])


   


    const editar_buzosycamperas = ()=>{
        const datos_enviar={
            Talle: Talle,
            Color: Color,
            Cantidad: Cantidad
        };
        API.UpdateBuzosyCamperas(idBuzosyCamperas,datos_enviar);
        // nombre_curso.current.value=null;
        
        setmensajeSuccess('Se edito el producto')
            setTimeout(()=>{
                setmensajeSuccess('')
                // window.location.reload(true)
            }, 2000)
        }


    return(
        <div className="card table bg-dark text-white">
            <div className="card-header">
                Edicion de los datos del producto
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
                  <label for="">Talle</label>
                  <input 
                  type="text"
                   value={Talle} 
                    onChange={(event)=>setTalle(event.target.value)}
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
                <div className="form-group col-4">
                  <label for="">Cantidad</label>
                  <input 
                  type="text"
                   value={Cantidad} 
                   onChange={(event)=>setCantidad(event.target.value)}
                  name="" id="" className="form-control bg-dark text-white" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted ">&nbsp;</small>
                </div>
        
                </div>
                <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                            
                <button onClick={editar_buzosycamperas} type="button" className="btn btn-outline-secondary text-success">Guardar</button>
                <small id="helpId" className="text-muted">&nbsp;</small>

                <Link to={'/listarbuzosycamperas'}>
                <button type="button" className="btn btn-outline-secondary text-primary">Volver a la lista</button>
                </Link>
                
                                
                </div>
                </td>
            </div>
            
        </div>
    )
        }