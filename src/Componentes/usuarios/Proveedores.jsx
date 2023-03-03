import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../../Servicios/Servicios'


export function    Proveedores(){

    const [proveedor, setProveedores] = useState([]);

    useEffect(()=>{
        API.proveedores().then(setProveedores)
    },[])
    
    return(

        <div className="card table bg-dark text-white">
        <div className="card-header">
        Proveedores
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proveedor.map((provedor)=>(
                        <tr className="">
                            <td scope="row">{provedor.idProveedores}</td>
                            <td>{provedor.Nombre}</td>
                            <td>{provedor.Direccion}</td>
                            <td>{provedor.Telefono}</td>
                            <td>{provedor.Estado}</td>
                            <td>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-outline-primary">Alta</button>
                                <button type="button" className="btn btn-outline-secondary">Editar</button>
                                <button type="button" className="btn btn-outline-danger">Baja</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}