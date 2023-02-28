import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../Servicios/Servicios'


export function     ListaBuzos(){

    const [buzos, setBuzos] = useState([]);

    useEffect(()=>{
        API.buzosycamperas().then(setBuzos)
    },[])
    
    return(

        <div className="card table bg-dark text-white">
        <div className="card-header">
        Stock de Buzos y Camperas
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Talle</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Color</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buzos.map((buzosycamperas)=>(
                        <tr className="">
                            <td scope="row">{buzosycamperas.idBuzosyCamperas}</td>
                            <td>{buzosycamperas.Talle}</td>
                            <td>{buzosycamperas.Cantidad}</td>
                            <td>{buzosycamperas.Color}</td>
                            <td>{buzosycamperas.Estado}</td>
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