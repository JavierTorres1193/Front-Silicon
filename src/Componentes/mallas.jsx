import React, { useEffect } from "react";
import { useState } from "react";
import * as API from '../Servicios/Servicios'


export function     ListaMallas(){

    const [malla, setMallas] = useState([]);

    useEffect(()=>{
        API.mallas().then(setMallas)
    },[])
    
    return(

        <div className="card">
        <div className="card-header">
        Stock de Mallas
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
                        {malla.map((mallas)=>(
                        <tr className="">
                            <td scope="row">{mallas.idMallas}</td>
                            <td>{mallas.Talle}</td>
                            <td>{mallas.Cantidad}</td>
                            <td>{mallas.Color}</td>
                            <td>{mallas.Estado}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            
            

    )  
}