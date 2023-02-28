import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../Servicios/Servicios'


export function     ListaBuzos(){

    const [buzos, setBuzos] = useState([]);

    useEffect(()=>{
        API.buzosycamperas().then(setBuzos)
    },[])
    
    return(

        <div className="card">
        <div className="card-header">
        Stock de Buzos y Camperas
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

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}