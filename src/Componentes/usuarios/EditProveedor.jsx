import React, { useEffect,useState } from 'react'
import { Link, useParams} from 'react-router-dom';
import * as API from '../../servicios/servicios'

export function EditProveedores(){

    const [setProveedores] = useState('')
    const [mensajeSuccess, setmensajeSuccess] = useState('')
    const [Nombre, setNombre] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [Telefono, setTelefono] = useState('');
    const {idProveedores} = useParams();





    useEffect(()=>{
        // trae_datos(idClientes)
        API.getProveedorById(idProveedores).then(setProveedores)
    },[])


   


    const editar_proveedor = ()=>{
        const datos_enviar={
            Nombre: Nombre,
            Direccion: Direccion,
            Telefono: Telefono
        };
        API.UpdateProovedor(idProveedores,datos_enviar);
        // nombre_curso.current.value=null;
        
        setmensajeSuccess('Se Edito el cliente')
            setTimeout(()=>{
                setmensajeSuccess('')
                // window.location.reload(true)
            }, 2000)
        }


    return(
        <div className="card table bg-dark text-white">
            <div className="card-header">
                Edicion de los datos del proovedor
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
                            
                <button onClick={editar_proveedor} type="button" className="btn btn-outline-secondary text-success">Guardar</button>
                <small id="helpId" className="text-muted">&nbsp;</small>

                <Link to={'/proveedores'}>
                <button type="button" className="btn btn-outline-secondary text-primary">Volver a la lista</button>
                </Link>
                
                                
                </div>
                </td>
            </div>
            
        </div>
    )
        }