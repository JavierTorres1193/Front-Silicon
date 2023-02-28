import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../Servicios/Servicios'


export function     ListaPantalones(){

    const [pantalon, setPantalones] = useState([]);

    useEffect(()=>{
        API.pantalones().then(setPantalones)
    },[])
    
    return(

        <div className="card">
        <div className="card-header">
        Stock de Pantalones
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table table-primary">
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
                        {pantalon.map((pantalones)=>(
                        <tr className="">
                            <td scope="row">{pantalones.idpantalones}</td>
                            <td>{pantalones.Talle}</td>
                            <td>{pantalones.Cantidad}</td>
                            <td>{pantalones.Color}</td>
                            <td>{pantalones.Estado}</td>
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